import styled from 'styled-components'
import { colors, spacing, breakpoints } from '../../styles'

export const FooterWrapper = styled.footer`
  background-color: ${colors.primary};
  color: ${colors.white};
`

export const FooterContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 64px ${spacing.lg};

  @media (max-width: ${breakpoints.tablet}) {
    padding: 64px ${spacing.md};
  }
`

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 48px;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export const FooterSection = styled.div``

export const BrandSection = styled.div``

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`

export const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-weight: bold;
`

export const BrandName = styled.span`
  font-size: 20px;
  font-weight: 700;
`

export const BrandDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  font-weight: 600;
  margin-bottom: 16px;
`

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const LinkItem = styled.li`
  margin-bottom: 8px;
`

export const Link = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 14px;
  transition: color 300ms ease-out;

  &:hover {
    color: ${colors.white};
  }
`

export const Divider = styled.div`
  border-top: 1px solid rgba(59, 130, 246, 0.3);
  padding-top: 32px;
`

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
`
