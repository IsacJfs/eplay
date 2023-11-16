import styled from 'styled-components'
import bannerImage from '../../assets/images/banner-homem-aranha.png'

export const Imagem = styled.div`
  background-image: url('${bannerImage}');
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  padding-top: 340px;
`

export const TituloBanner = styled.h2`
  max-width: 456px;
  font-size: 36px;
`

export const PrecosBanner = styled.p`
  font-size: 24px;
  line-height: 32px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
