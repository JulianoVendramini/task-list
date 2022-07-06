import { useState } from 'react'

import { useMutation, useQuery } from '@apollo/client'
import { toast } from 'react-toastify'

import { CREATE_TASKS_LIST_MUTATION } from '../../graphql/mutations/tasks-list'
import { TASKS_LIST_QUERY } from '../../graphql/queries/tasks-list'
import { TasksListProps } from '../../types/task'

import ButtonAddNewTasksList from '../ButtonAddNewTasksList'
import Header from '../Header'
import Modal from '../Modal'
import ModalInputContent from '../ModalInputContent'
import TasksList from '../TasksList'

import 'react-toastify/dist/ReactToastify.css'

import * as S from './styles'

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const { data: { getTasksList } = {}, loading } = useQuery(TASKS_LIST_QUERY)
  const [createTasksList, { loading: creatingTasksList }] = useMutation(
    CREATE_TASKS_LIST_MUTATION
  )

  const handleCreateNewTasksList = (name: string) => {
    createTasksList({
      variables: {
        tasksList: {
          name
        }
      },
      onError: () => {
        toast.error('TasksList already exists')
      },
      onCompleted: () => {
        toast.success('TasksList created successfully')
      },
      refetchQueries: [{ query: TASKS_LIST_QUERY }]
    })

    handleCloseModal()
    setInputValue('')
  }

  return (
    <S.Wrapper>
      <Modal isOpenned={isModalOpen} closeModal={handleCloseModal}>
        <ModalInputContent
          buttonText="Create"
          isLoading={creatingTasksList}
          inputValue={inputValue}
          handleChange={handleChangeInput}
          handleClose={handleCloseModal}
          handleConfirm={() => handleCreateNewTasksList(inputValue)}
          title="Create new tasks list"
        />
      </Modal>
      <Header />
      <S.TasksWrapper>
        {loading ? (
          <h1>loading</h1>
        ) : (
          getTasksList.map((task: TasksListProps) => {
            return (
              <TasksList
                isNewTasksList
                key={task.id}
                id={task.id}
                name={task.name}
                tasks={task.tasks}
              />
            )
          })
        )}
        <ButtonAddNewTasksList
          text="Add new TasksList"
          onClick={handleOpenModal}
        />
      </S.TasksWrapper>
    </S.Wrapper>
  )
}

export default Dashboard
