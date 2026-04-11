import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { colors } from '../../styles'
import * as S from './styles'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Serviços', href: '#services' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Contato', href: '#contact' }
  ]

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.Logo>Roger Polimentos</S.Logo>
        <S.Nav>
          {navItems.map((item) => (
            <S.NavLink key={item.label} href={item.href}>
              {item.label}
            </S.NavLink>
          ))}
        </S.Nav>
        <S.CTAButton>
          <a href="http://wa.me/5541988965578" target="_blank" rel="noreferrer">
            Solicitar Orçamento
          </a>
        </S.CTAButton>

        <S.MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X size={24} color={colors.primary} />
          ) : (
            <Menu size={24} color={colors.primary} />
          )}
        </S.MobileMenuButton>
      </S.HeaderContainer>

      <S.MobileNav isOpen={isMenuOpen}>
        {navItems.map((item) => (
          <S.MobileNavLink
            key={item.label}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </S.MobileNavLink>
        ))}
        <S.MobileCtaButton>
          <a href="http://wa.me/5541988965578" target="_blank" rel="noreferrer">
            Solicitar Orçamento
          </a>
        </S.MobileCtaButton>
      </S.MobileNav>
    </S.HeaderWrapper>
  )
}
