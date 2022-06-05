import Task from '../Task'

import { BsPlusLg } from 'react-icons/bs'

import { TaskProps } from '../../types/task'

import * as S from './styles'

type Props = {
  title: string
  tasks: TaskProps[]
}

const TaskList = ({ title, tasks }: Props) => {
  // const [createTask, { data, loading, error }] = useMutation(
  //   CREATE_TASK_MUTATION,
  //   {
  //     refetchQueries: [TASKS_QUERY]
  //   }
  // )
  const totalTasks = tasks?.length || 0

  // const handleCheck = (id: number) => {
  //   const newTasks = tasksValues.map((task) => {
  //     if (task.id === id) {
  //       task.done = !task.done
  //     }
  //     return task
  //   })
  //   setTasksValues(newTasks)
  // }

  // const handleRemove = (id: number) => {
  //   const newTasks = tasksValues.filter((task) => task.id !== id)
  //   setTasksValues(newTasks)
  // }

  // const createNewTask = async () => {
  //   await createTask({
  //     variables: {
  //       title: 'test'
  //     }
  //   })
  // }

  return (
    <>
      {tasks && (
        <S.Wrapper>
          <S.Header>
            <S.Title>{title}</S.Title>
            <S.TasksCount>
              {totalTasks > 1 ? `${totalTasks} tasks` : `${totalTasks} task`}
            </S.TasksCount>
            <S.AddNewtaskButton>
              <BsPlusLg onClick={() => console.log('create new task')} />
            </S.AddNewtaskButton>
          </S.Header>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              handleClick={() => console.log('clicked')}
              handleRemove={() => console.log('removed')}
            />
          ))}
        </S.Wrapper>
      )}
    </>
  )
}

export default TaskList
