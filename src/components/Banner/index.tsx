import Button from '../Button'
import Tag from '../Tag'
import * as S from './styles'

const Banner = () => (
  <S.Imagem>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <S.TituloBanner>
          Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5
        </S.TituloBanner>
        <S.PrecosBanner>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90
        </S.PrecosBanner>
      </div>
      <Button
        type="link"
        to="/produto"
        title="clique aqui para aproveitar esta oferta"
      >
        Aproveitar
      </Button>
    </div>
  </S.Imagem>
)

export default Banner
