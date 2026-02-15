import * as S from './styles'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.FooterGrid>
          {/* Brand */}
          <S.BrandSection>
            <S.LogoWrapper>
              <S.BrandName>Roger Polimentos</S.BrandName>
            </S.LogoWrapper>
            <S.BrandDescription>
              Polimento profissional e detalhamento automotivo com excelência.
            </S.BrandDescription>
          </S.BrandSection>
        </S.FooterGrid>
        <S.Divider>
          <S.BottomSection>
            <S.Copyright>
              © {currentYear} Roger Polimentos. Todos os direitos reservados.
            </S.Copyright>
            <S.SocialLinks>
              <S.SocialIcon
                href="https://www.instagram.com/r_poliment0s/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                📷
              </S.SocialIcon>
              <S.SocialIcon
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                💬
              </S.SocialIcon>
            </S.SocialLinks>
          </S.BottomSection>
        </S.Divider>
      </S.FooterContainer>
    </S.FooterWrapper>
  )
}

export default Footer
