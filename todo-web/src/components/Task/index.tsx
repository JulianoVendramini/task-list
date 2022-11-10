import { useState } from 'react'

import Modal from '../Modal'
import InputModalContent from '../InputModalContent'

import { FiTrash } from 'react-icons/fi'
import { BsFillPencilFill } from 'react-icons/bs'
import { toast } from 'react-toastify'

import { useMutation } from '@apollo/client'
import {
  CHECK_TASK_MUTATION,
  DELETE_TASK_MUTATION,
  EDIT_TASK_MUTATION
} from '../../graphql/mutations/task'
import { TASKS_LIST_QUERY } from '../../graphql/queries/tasks-list'

import { TaskProps } from '../../types/task'

import * as S from './styles'

type Props = {
  task: TaskProps
}

const Task = ({ task }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [taskName, setTaskName] = useState('')

  const [deleteTask] = useMutation(DELETE_TASK_MUTATION)
  const [editTask] = useMutation(EDIT_TASK_MUTATION, {
    refetchQueries: [{ query: TASKS_LIST_QUERY }]
  })
  const [checkTask] = useMutation(CHECK_TASK_MUTATION)

  const handleCheck = async () => {
    await checkTask({
      variables: {
        task: {
          id: task.id
        }
      }
    })

    toast.success('Task checked successfully')
  }

  const handleRemove = async () => {
    await deleteTask({
      variables: { deleteTaskId: task.id },
      refetchQueries: [{ query: TASKS_LIST_QUERY }]
    })

    toast.success('Task deleted successfully')
  }

  const handleUpdate = async () => {
    setTaskName(task.title)

    await editTask({
      variables: {
        task: {
          id: task.id,
          title: taskName
        }
      }
    })

    toast.success('Task updated successfully')
    setTaskName('')
    handleCloseModal()
  }

  const hadleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Modal closeModal={handleCloseModal} isOpenned={isModalOpen}>
        <InputModalContent
          title="Task name:"
          inputValue={taskName}
          onChange={(value) => setTaskName(value)}
          closeModal={handleCloseModal}
          onConfirm={handleUpdate}
        />
      </Modal>
      <S.Wrapper>
        <S.Title isDone={task.isDone} onClick={handleCheck}>
          {task.title}
        </S.Title>
        <S.ActionButtonWrapper>
          <S.RemoveButton onClick={handleRemove}>
            <FiTrash />
          </S.RemoveButton>
          <S.UpdateButton
            onClick={() => {
              hadleOpenModal()
              setTaskName(task.title)
            }}
          >
            <BsFillPencilFill />
          </S.UpdateButton>
        </S.ActionButtonWrapper>
      </S.Wrapper>
    </>
  )
}

export default Task
