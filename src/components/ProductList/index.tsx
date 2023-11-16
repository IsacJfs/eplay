import Product from '../Product'
import * as S from './style'

type Props = {
  title: string
  background: 'secundary' | 'primary'
}

const ProductsList = ({ background, title }: Props) => (
  <div className="Container">
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.ListGrid>
        <Product />
        <Product />
        <Product />
        <Product />
      </S.ListGrid>
    </S.Container>
  </div>
)

export default ProductsList
