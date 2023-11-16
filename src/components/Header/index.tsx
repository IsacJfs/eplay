import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <S.HeaderBar>
    <div>
      <img src={logo} alt="EPLAY" />
      <nav>
        <S.Links>
          <S.LinkItem>
            <a href="#">Categorias</a>
          </S.LinkItem>
          <S.LinkItem>
            <a href="#">Novidades</a>
          </S.LinkItem>
          <S.LinkItem>
            <a href="#">Promoções</a>
          </S.LinkItem>
        </S.Links>
      </nav>
    </div>
    <S.LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="carrinho" />
    </S.LinkCart>
  </S.HeaderBar>
)

export default Header
