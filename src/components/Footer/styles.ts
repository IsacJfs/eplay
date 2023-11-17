import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.bgSecondary};
  padding: 32px 0;
  font-size: 14px;
`

export const TitleSection = styled.h4`
  color: ${colors.colorText};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled.a`
  color: ${colors.colorSubtitle};
  text-decoration: none;
  margin-right: 8px;
  cursor: pointer;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`
