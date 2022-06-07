import Task from '../Task'

import { BsPlusLg } from 'react-icons/bs'

import { TaskProps } from '../../types/task'
import { useMutation } from '@apollo/client'
import {
  CHECK_TASK_MUTATION,
  CREATE_TASK_MUTATION,
  DELETE_TASK_MUTATION,
  EDIT_TASK_MUTATION
} from '../../graphql/mutations/task'
import { TASKS_LIST_QUERY } from '../../graphql/queries/tasks-list'

import * as S from './styles'

type Props = {
  id: number
  title: string
  tasks: TaskProps[]
}

const TasksList = ({ id, title, tasks }: Props) => {
  const [createTask] = useMutation(CREATE_TASK_MUTATION)
  const [deleteTask] = useMutation(DELETE_TASK_MUTATION)
  const [editTask] = useMutation(EDIT_TASK_MUTATION)
  const [checkTask] = useMutation(CHECK_TASK_MUTATION)

  const totalTasks = tasks.length

  const handleCheck = (id: number, isDone: boolean) => {
    checkTask({
      variables: {
        task: {
          id,
          isDone
        }
      }
    })
  }

  const handleRemove = (id: number) => {
    deleteTask({
      variables: { deleteTaskId: id },
      refetchQueries: [{ query: TASKS_LIST_QUERY }]
    })
  }

  const handleUpdate = (id: number) => {
    editTask({
      variables: {
        task: {
          id,
          title: 'new title'
        }
      }
    })
  }

  const handleCreateNewTask = async () => {
    await createTask({
      variables: {
        task: {
          title: 'Nova tarefa',
          tasksListId: id
        }
      },
      refetchQueries: [{ query: TASKS_LIST_QUERY }]
    })
  }

  return (
    tasks && (
      <S.Wrapper>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.TasksCount>
            {totalTasks > 1 ? `${totalTasks} tasks` : `${totalTasks} task`}
          </S.TasksCount>
          <S.AddNewtaskButton onClick={handleCreateNewTask}>
            <BsPlusLg />
          </S.AddNewtaskButton>
        </S.Header>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleCheck={handleCheck}
            handleRemove={handleRemove}
            handleUpdate={handleUpdate}
          />
        ))}
      </S.Wrapper>
    )
  )
}

export default TasksList
