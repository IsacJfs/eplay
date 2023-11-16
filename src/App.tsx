import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './components/Banner'
import Header from './components/Header'
import * as S from './styles'
import ProductsList from './components/ProductList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductsList title="Nome do Jogo" background="secundary" />
        <ProductsList title="Em breve" background="primary" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <S.GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
