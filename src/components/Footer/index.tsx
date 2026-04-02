import * as S from './styles'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.FooterGrid>
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
              <br />
              Desenvolvido por{' '}
              <S.Link
                href="https://www.instagram.com/nyck_fst"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nycolas Klentfelt
              </S.Link>
            </S.Copyright>
          </S.BottomSection>
        </S.Divider>
      </S.FooterContainer>
    </S.FooterWrapper>
  )
}

export default Footer
