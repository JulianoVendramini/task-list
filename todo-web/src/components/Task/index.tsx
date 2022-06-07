import { TaskProps } from '../../types/task'
import { FiTrash } from 'react-icons/fi'
import { BsFillPencilFill } from 'react-icons/bs'

import * as S from './styles'

type Props = {
  task: TaskProps
  handleCheck: (id: number, isDone: boolean) => void
  handleRemove: (id: number) => void
  handleUpdate: (id: number) => void
}

const Task = ({ task, handleCheck, handleRemove, handleUpdate }: Props) => {
  return (
    <S.Wrapper>
      <S.Title
        isDone={task.isDone}
        onClick={() => handleCheck(task.id, !task.isDone)}
      >
        {task.title}
      </S.Title>
      <S.ActionButtonWrapper>
        <S.RemoveButton onClick={() => handleRemove(task.id)}>
          <FiTrash />
        </S.RemoveButton>
        <S.UpdateButton onClick={() => handleUpdate(task.id)}>
          <BsFillPencilFill />
        </S.UpdateButton>
      </S.ActionButtonWrapper>
    </S.Wrapper>
  )
}

export default Task
