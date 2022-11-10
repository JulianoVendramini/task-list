import { useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'

import Button from '../Button'
import Header from '../Header'
import InputModalContent from '../InputModalContent'
import Modal from '../Modal'
import TasksList from '../TasksList'

import { toast } from 'react-toastify'

import {
  CREATE_TASKS_LIST_MUTATION,
  DELETE_TASKS_LIST_MUTATION
} from '../../graphql/mutations/tasks-list'
import { TASKS_LIST_QUERY } from '../../graphql/queries/tasks-list'
import { TasksListProps } from '../../types/task'

import * as S from './styles'

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tasksListTitle, setTasksListTitle] = useState('')

  const { data: { getTasksList } = {}, loading: loadingList } =
    useQuery(TASKS_LIST_QUERY)
  const [createTasksList, { loading: creatingList }] = useMutation(
    CREATE_TASKS_LIST_MUTATION
  )
  const [deleteTasksList, { loading: deletingList }] = useMutation(
    DELETE_TASKS_LIST_MUTATION
  )

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTasksListTitle('')
  }

  const handleCreateTasksList = async () => {
    if (!tasksListTitle) {
      toast.error('List title is required')
      return
    }

    await createTasksList({
      variables: {
        tasksList: {
          name: tasksListTitle
        }
      },
      refetchQueries: [{ query: TASKS_LIST_QUERY }]
    })

    toast.success('List created successfully')
    handleCloseModal()
    setTasksListTitle('')
  }

  const handleRemoveList = async (id: number) => {
    await deleteTasksList({
      variables: {
        tasksList: {
          id
        }
      },
      refetchQueries: [{ query: TASKS_LIST_QUERY }]
    })

    toast.success('List deleted successfully')
  }

  return (
    <>
      <Modal closeModal={handleCloseModal} isOpenned={isModalOpen}>
        <InputModalContent
          title="List name:"
          inputValue={tasksListTitle}
          onChange={(value) => setTasksListTitle(value)}
          closeModal={handleCloseModal}
          onConfirm={handleCreateTasksList}
        />
      </Modal>
      <S.Wrapper>
        <Header />
        <S.ButtonWrapper>
          <Button text="Add new list" onClick={handleOpenModal} />
        </S.ButtonWrapper>
        <S.TasksWrapper>
          {loadingList ? (
            <h1>loading</h1>
          ) : (
            getTasksList.map((tasksList: TasksListProps) => (
              <>
                {creatingList && <h1>creating</h1>}
                <TasksList
                  key={tasksList.id}
                  id={tasksList.id}
                  title={tasksList.name}
                  tasks={tasksList.tasks}
                  onDelete={handleRemoveList}
                  isLoading={deletingList}
                />
              </>
            ))
          )}
        </S.TasksWrapper>
      </S.Wrapper>
    </>
  )
}

export default Dashboard
