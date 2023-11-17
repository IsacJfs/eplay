import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../styles'
import { Card } from '../Product/style'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'primary' ? colors.bgPrimary : colors.bgSecondary};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'primary' ? colors.bgSecondary : colors.bgPrimary};
  }
`

export const ListGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`
