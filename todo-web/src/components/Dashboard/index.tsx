import { useQuery } from '@apollo/client'
import { TASKS_LIST_QUERY } from '../../graphql/queries/tasks-list'
import { TasksListProps } from '../../types/task'

import Header from '../Header'
import TasksList from '../TasksList'

import * as S from './styles'

const Dashboard = () => {
  const { data: { getTasksList } = {}, loading } = useQuery(TASKS_LIST_QUERY)

  return (
    <S.Wrapper>
      <Header />
      <S.TasksWrapper>
        {loading ? (
          <h1>loading</h1>
        ) : (
          getTasksList.map((task: TasksListProps) => (
            <TasksList
              key={task.id}
              id={task.id}
              title={task.name}
              tasks={task.tasks}
            />
          ))
        )}
      </S.TasksWrapper>
    </S.Wrapper>
  )
}

export default Dashboard
