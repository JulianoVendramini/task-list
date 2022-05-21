import { mergeTypeDefs } from '@graphql-tools/merge'

import baseTypes from './base'
import taskTypes from './task'

export default mergeTypeDefs([baseTypes, taskTypes])
