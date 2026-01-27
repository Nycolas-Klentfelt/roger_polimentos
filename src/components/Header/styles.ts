import styled from 'styled-components'
import { Container, colors } from '../../styles'

export const BoxHeader = styled.div`
  border-bottom: solid 1px ${colors.gray300};
  box-shadow: 0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a;
  height: 80px;

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`

export const Logo = styled.div`
  color: ${colors.primary};

  & > h1 {
    font-size: 20px;
    font-weight: 700;
  }
`

export const MenuNav = styled.nav`
  display: flex;
  gap: 32px;
  color: ${colors.gray600};

  & > li {
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: ${colors.primary};
    }
  }
`
