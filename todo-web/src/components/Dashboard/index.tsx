import { useQuery } from '@apollo/client'
import { TASKS_QUERY } from '../../graphql/queries/task'

import Header from '../Header'
import TaskList from '../TaskList'

import * as S from './styles'

const Dashboard = () => {
  const { data: { tasks } = { tasks: [] } } = useQuery(TASKS_QUERY)

  console.log(tasks)

  return (
    <S.Wrapper>
      <Header />
      <S.TasksWrapper>
        <TaskList title="Estudos" tasks={tasks} />
      </S.TasksWrapper>
    </S.Wrapper>
  )
}

export default Dashboard
