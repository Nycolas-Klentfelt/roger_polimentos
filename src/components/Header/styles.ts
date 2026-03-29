import styled from 'styled-components'
import { colors, spacing, breakpoints } from '../../styles'

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.gray100};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`

export const HeaderContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 ${spacing.md};
  }
`

export const Logo = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.primary};
  display: inline;
`

export const Nav = styled.nav`
  display: none;
  align-items: center;
  gap: ${spacing.xl};

  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
  }
`

export const NavLink = styled.a`
  color: #4b5563;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: ${colors.primary};
  }
`

export const CTAButton = styled.button`
  display: none;
  background-color: ${colors.primary};
  color: ${colors.white};
  font-weight: 600;
  padding: ${spacing.md} ${spacing.xl};
  border: none;
  border-radius: 16px;
  transition: background-color 300ms ease-out;
  cursor: pointer;

  @media (min-width: ${breakpoints.tablet}) {
    display: inline-flex;
  }

  &:hover {
    background-color: #1e3a8a;
  }
`

export const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.sm};
  background-color: transparent;
  border: none;
  transition: background-color 300ms ease-out;
  cursor: pointer;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }

  &:hover {
    background-color: #f3f4f6;
  }
`

export const MobileNav = styled.nav<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: ${spacing.md};
  border-top: 1px solid #f3f4f6;
  background-color: ${colors.white};
  padding: ${spacing.md};

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const MobileNavLink = styled.a`
  color: #4b5563;
  font-weight: 500;
  padding: ${spacing.sm} 0;
  text-decoration: none;

  &:hover {
    color: ${colors.primary};
  }
`

export const MobileCtaButton = styled.button`
  width: 100%;
  background-color: ${colors.primary};
  color: ${colors.white};
  font-weight: 600;
  padding: ${spacing.md};
  border: 1px solid ${colors.primary};
  border-radius: 16px;
  margin-top: ${spacing.md};
  transition: background-color 300ms ease-out;
  cursor: pointer;

  &:hover {
    background-color: #1e3a8a;
  }
`
