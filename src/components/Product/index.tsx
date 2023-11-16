// import jogoRedisent from '../../assets/images/resident.png'
import * as S from './style'
import Tag from '../Tag'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  category,
  description,
  image,
  infos,
  system,
  title
}: Props) => (
  <S.Card>
    <img src={image} alt={title} />
    <S.Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </S.Infos>
    <S.TituloCard>{title}</S.TituloCard>
    <Tag size="small">{category}</Tag>
    <Tag>{system}</Tag>
    <S.Descricao>{description}</S.Descricao>
  </S.Card>
)

export default Product
