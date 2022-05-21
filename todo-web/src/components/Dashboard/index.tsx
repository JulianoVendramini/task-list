import Header from '../Header'
import TaskList from '../TaskList'

import * as S from './styles'

const estudosTasks = [
  {
    id: 1,
    title: 'Lavar o banheiro',
    done: true
  },
  {
    id: 2,
    title: 'Arrumar o quarto',
    done: true
  },
  {
    id: 3,
    title: 'Lavar louça',
    done: false
  }
]

const trabalhoTasks = [
  {
    id: 1,
    title: 'Fazer tela de login',
    done: true
  },
  {
    id: 2,
    title: 'Arrumar tela de signup',
    done: false
  }
]

const Dashboard = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.TasksWrapper>
        <TaskList title="Estudos" tasks={estudosTasks} />
        <TaskList title="Trabalho" tasks={trabalhoTasks} />
      </S.TasksWrapper>
    </S.Wrapper>
  )
}

export default Dashboard
