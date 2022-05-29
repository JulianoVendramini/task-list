import { mergeTypeDefs } from '@graphql-tools/merge'

import baseTypes from './base'
import taskTypes from './task'
import tasksListTypes from './tasks-list'

export default mergeTypeDefs([baseTypes, taskTypes, tasksListTypes])
