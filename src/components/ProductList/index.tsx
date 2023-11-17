import { Game } from '../../models/Game'
import Product from '../Product'
import * as S from './style'

export type Props = {
  title: string
  background: 'secundary' | 'primary'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => (
  <div className="container">
    <S.Container background={background}>
      <S.Title>{title}</S.Title>
      <S.ListGrid>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
      </S.ListGrid>
    </S.Container>
  </div>
)

export default ProductsList
