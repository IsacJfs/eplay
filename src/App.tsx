import Banner from './components/Banner'
import Header from './components/Header'
import * as S from './styles'

function App() {
  return (
    <>
      <S.GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Banner />
    </>
  )
}

export default App
