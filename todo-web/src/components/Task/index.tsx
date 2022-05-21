import { TaskProps } from '../../types/task'
import { FiTrash } from 'react-icons/fi'
import { BsFillPencilFill } from 'react-icons/bs'

import * as S from './styles'

type Props = {
  task: TaskProps
  handleClick: (id: number) => void
  handleRemove: (id: number) => void
}

const Task = ({ task, handleClick, handleRemove }: Props) => {
  return (
    <S.Wrapper>
      <S.Title isDone={task.isDone} onClick={() => handleClick(task.id)}>
        {task.title}
      </S.Title>
      <S.ActionButtonWrapper>
        <S.RemoveButton onClick={() => handleRemove(task.id)}>
          <FiTrash />
        </S.RemoveButton>
        <S.UpdateButton>
          <BsFillPencilFill />
        </S.UpdateButton>
      </S.ActionButtonWrapper>
    </S.Wrapper>
  )
}

export default Task
