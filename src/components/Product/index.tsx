// import jogoRedisent from '../../assets/images/resident.png'
import * as S from './style'
import Tag from '../Tag'

const Product = () => (
  <S.Card>
    <img src="//placehold.it/222x250" alt="Jogo Resident" />
    <S.TituloCard>Resident Evil</S.TituloCard>
    <Tag size="small">Categoria</Tag>
    <Tag>Windows</Tag>
    <S.Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
      perferendis blanditiis velit pariatur iure veritatis exercitationem quia
      harum facere quae aliquam a quisquam maxime praesentium laboriosam dolor,
      officia numquam similique!
    </S.Descricao>
  </S.Card>
)

export default Product
