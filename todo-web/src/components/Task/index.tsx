import { TaskProps } from '../../types/task'
import { FiTrash } from 'react-icons/fi'
import { BsFillPencilFill } from 'react-icons/bs'

import * as S from './styles'
import ActionButton from '../ActionButton'
import { useState } from 'react'
import {
  CHECK_TASK_MUTATION,
  DELETE_TASK_MUTATION,
  EDIT_TASK_MUTATION
} from '../../graphql/mutations/task'
import { useMutation } from '@apollo/client'
import { TASKS_LIST_QUERY } from '../../graphql/queries/tasks-list'
import { toast } from 'react-toastify'
import Modal from '../Modal'
import ModalInputContent from '../ModalInputContent'

type Props = {
  task: TaskProps
}

const Task = ({ task }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const [editTask, { loading: editingTask }] = useMutation(EDIT_TASK_MUTATION)
  const [deleteTask, { loading: deletingTask }] =
    useMutation(DELETE_TASK_MUTATION)
  const [checkTask, { loading: checkingTask }] =
    useMutation(CHECK_TASK_MUTATION)

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleCheck = async (id: number, isDone: boolean) => {
    await checkTask({
      variables: {
        task: {
          id,
          isDone
        }
      }
    })
  }

  const handleRemove = async (id: number) => {
    await deleteTask({
      variables: { deleteTaskId: id },
      refetchQueries: [{ query: TASKS_LIST_QUERY }]
    })
  }

  const handleUpdateTask = async (title: string, id: number) => {
    await editTask({
      variables: {
        task: {
          title,
          id
        }
      },
      onError: (err) => {
        toast.error(`Error: ${err.message}`)
      },
      onCompleted: () => {
        toast.success('Task edited successfully')
      }
    })

    handleCloseModal()
    setInputValue('')
  }

  return (
    <>
      <Modal isOpenned={isModalOpen} closeModal={handleCloseModal}>
        <ModalInputContent
          buttonText="Update"
          isLoading={editingTask}
          inputValue={inputValue}
          handleChange={handleChangeInput}
          handleClose={handleCloseModal}
          handleConfirm={() => handleUpdateTask(inputValue, task.id)}
          title="Create new task"
        />
      </Modal>
      <S.Wrapper isDone={task.isDone}>
        <S.Title
          isDone={task.isDone}
          onClick={() => handleCheck(task.id, !task.isDone)}
        >
          {task.title}
        </S.Title>
        <S.ActionButtonWrapper>
          <ActionButton variant="remove" onClick={() => handleRemove(task.id)}>
            <FiTrash />
          </ActionButton>
          {!task.isDone && (
            <ActionButton variant="update" onClick={handleOpenModal}>
              <BsFillPencilFill />
            </ActionButton>
          )}
        </S.ActionButtonWrapper>
      </S.Wrapper>
    </>
  )
}

export default Task
