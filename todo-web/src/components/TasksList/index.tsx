import { useState } from 'react'

import Task from '../Task'
import Modal from '../Modal'
import InputModalContent from '../InputModalContent'

import { AiOutlineDelete } from 'react-icons/ai'
import { BsPlusLg } from 'react-icons/bs'
import { toast } from 'react-toastify'

import { TaskProps } from '../../types/task'

import { useMutation } from '@apollo/client'
import { CREATE_TASK_MUTATION } from '../../graphql/mutations/task'
import { TASKS_LIST_QUERY } from '../../graphql/queries/tasks-list'

import * as S from './styles'

type Props = {
  id: number
  title: string
  tasks: TaskProps[]
  onDelete: (id: number) => void
  isLoading: boolean
}

const TasksList = ({ id, title, tasks, onDelete, isLoading }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [taskName, setTaskName] = useState('')

  const TASK_COUNT = tasks.length

  const [createTask] = useMutation(CREATE_TASK_MUTATION)

  const handleCreateNewTask = async () => {
    if (!taskName) {
      toast.error('Task name is required')
      return
    }

    await createTask({
      variables: {
        task: {
          title: taskName,
          tasksListId: id
        }
      },
      refetchQueries: [{ query: TASKS_LIST_QUERY }]
    })

    toast.success('Task created successfully')
    setTaskName('')
    handleCloseModal()
  }

  const hadleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleDelete = () => {
    onDelete(id)
  }

  return (
    <>
      <Modal closeModal={handleCloseModal} isOpenned={isModalOpen}>
        <InputModalContent
          title="Task name:"
          inputValue={taskName}
          onChange={(value) => setTaskName(value)}
          closeModal={handleCloseModal}
          onConfirm={handleCreateNewTask}
          disabledButton={!taskName}
        />
      </Modal>
      <S.Wrapper>
        {isLoading ? (
          <h1>loading...</h1>
        ) : (
          <>
            <S.RemoveButton onClick={handleDelete}>
              <AiOutlineDelete />
            </S.RemoveButton>
            <S.Header>
              <S.Title>{title}</S.Title>
              <S.TasksCount>
                {TASK_COUNT > 1 ? `${TASK_COUNT} tasks` : `${TASK_COUNT} task`}
              </S.TasksCount>
              <S.AddNewtaskButton onClick={hadleOpenModal}>
                <BsPlusLg />
              </S.AddNewtaskButton>
            </S.Header>
            {tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </>
        )}
      </S.Wrapper>
    </>
  )
}

export default TasksList
