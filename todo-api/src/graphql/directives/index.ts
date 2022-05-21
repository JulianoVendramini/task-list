import { defaultFieldResolver } from 'graphql'
import { ForbiddenError } from 'apollo-server-express'
import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils'

// Write here your own logic to get the user from accessToken
const getUserByAccessToken = (accessToken) => {
  return {
    id: 1,
    name: 'John Doe',
    token: accessToken // Example only. Remove this field later
  }
}

export const authDirective = (schema, directiveName) => {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const authDirective = getDirective(
        schema,
        fieldConfig,
        directiveName
      )?.[0]
      if (authDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig
        fieldConfig.resolve = function (source, args, context, info) {
          const accessToken = context?.req?.headers?.['authorization']
          // Write here your own logic to get the user from accessToken
          const user = getUserByAccessToken(accessToken)
          if (!user) {
            throw new ForbiddenError('not authorized')
          }
          return resolve(source, args, Object.assign(context, { user }), info)
        }
        return fieldConfig
      }
    }
  })
}
