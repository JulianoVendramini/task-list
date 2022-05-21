import { useState } from 'react'

import Task from '../Task'

import { BsPlusLg } from 'react-icons/bs'

import { TaskProps } from '../../types/task'

import * as S from './styles'

type Props = {
  title: string
  tasks: TaskProps[]
}

const TaskList = ({ title, tasks }: Props) => {
  const [tasksValues, setTasksValues] = useState(tasks)

  const totalTasks = tasks.length

  const handleCheck = (id: number) => {
    const newTasks = tasksValues.map((task) => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    })
    setTasksValues(newTasks)
  }

  const handleRemove = (id: number) => {
    const newTasks = tasksValues.filter((task) => task.id !== id)
    setTasksValues(newTasks)
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.TasksCount>
          {totalTasks > 1 ? `${totalTasks} tasks` : `${totalTasks} task`}
        </S.TasksCount>
        <S.AddNewtaskButton>
          <BsPlusLg />
        </S.AddNewtaskButton>
      </S.Header>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleClick={handleCheck}
          handleRemove={handleRemove}
        />
      ))}
    </S.Wrapper>
  )
}

export default TaskList
