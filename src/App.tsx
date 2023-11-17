import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import * as S from './styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <S.GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
