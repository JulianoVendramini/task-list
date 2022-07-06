import { useState } from 'react'

import Task from '../Task'
import AddButton from '../AddButton'
import Modal from '../Modal'
import ModalInputContent from '../ModalInputContent'

import { BsPlusLg } from 'react-icons/bs'
import { toast } from 'react-toastify'

import { TaskProps } from '../../types/task'
import { useMutation } from '@apollo/client'
import { CREATE_TASK_MUTATION } from '../../graphql/mutations/task'
import { TASKS_LIST_QUERY } from '../../graphql/queries/tasks-list'

import * as S from './styles'

type Props = {
  id: number
  name: string
  isNewTasksList: boolean
  tasks: TaskProps[]
}

const TasksList = ({ id, name, tasks }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const [createTask, { loading: creatingTask }] =
    useMutation(CREATE_TASK_MUTATION)

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleCreateNewTask = async (title: string) => {
    await createTask({
      variables: {
        task: {
          title,
          tasksListId: id
        }
      },
      onError: (err) => {
        toast.error(`Error: ${err.message}`)
      },
      onCompleted: () => {
        toast.success('Task created successfully')
      },
      refetchQueries: [{ query: TASKS_LIST_QUERY }]
    })

    handleCloseModal()
    setInputValue('')
  }

  const totalTasks = tasks.length
  const inputIsEmpty = inputValue.trim().length === 0

  return (
    tasks && (
      <S.Wrapper>
        <Modal isOpenned={isModalOpen} closeModal={handleCloseModal}>
          <ModalInputContent
            buttonText="Create"
            disable={inputIsEmpty}
            isLoading={creatingTask}
            inputValue={inputValue}
            handleChange={handleChangeInput}
            handleClose={handleCloseModal}
            handleConfirm={() => handleCreateNewTask(inputValue)}
            title="Create new task"
          />
        </Modal>
        <S.Header>
          <S.Input value={name} disabled />
          <S.TasksCount>
            {totalTasks > 1 ? `${totalTasks} tasks` : `${totalTasks} task`}
          </S.TasksCount>
        </S.Header>
        <S.TasksWrapper>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
          <AddButton onClick={handleOpenModal}>
            <BsPlusLg />
          </AddButton>
        </S.TasksWrapper>
      </S.Wrapper>
    )
  )
}

export default TasksList
