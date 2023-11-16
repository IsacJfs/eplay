import Product from '../Product'
import * as S from './style'

export type Props = {
  title: string
  background: 'secundary' | 'primary'
}

const ProductsList = ({ background, title }: Props) => (
  <div className="container">
    <S.Container background={background}>
      <S.Title>{title}</S.Title>
      <S.ListGrid>
        <Product
          category="Action"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="windows"
          title="Jogo Teste"
        />
        <Product
          category="Action"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="windows"
          title="Jogo Teste"
        />
        <Product
          category="Action"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="windows"
          title="Jogo Teste"
        />
        <Product
          category="Action"
          description="Teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="windows"
          title="Jogo Teste"
        />
      </S.ListGrid>
    </S.Container>
  </div>
)

export default ProductsList
