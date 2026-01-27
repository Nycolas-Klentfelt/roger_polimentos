import ImageHero from '../../assets/hero-car-shine.jpg'
import * as S from './styles'

const Hero = () => {
  return (
    <S.HeroSection>
      <S.Container>
        <S.Grid>
          <S.HeroContent>
            <S.HeroText>
              <S.HeroTagline>Excelência em Polimento</S.HeroTagline>
              <S.HeroTitle>Seu carro merece brilhar</S.HeroTitle>
              <S.HeroDescription>
                Transformamos o acabamento do seu veículo com técnicas
                profissionais e produtos de alta qualidade. Proteção, brilho e
                durabilidade garantidos.
              </S.HeroDescription>
            </S.HeroText>
            <S.HeroActions>
              <S.PrimaryButton>Solicitar Orçamento</S.PrimaryButton>
              <S.SecondaryButton>Conhecer serviços</S.SecondaryButton>
            </S.HeroActions>
            <S.HeroStats>
              <S.StatItem>
                <S.StatValue>500+</S.StatValue>
                <S.StatLabel>carros polidos</S.StatLabel>
              </S.StatItem>
              <S.StatItem>
                <S.StatValue>10+</S.StatValue>
                <S.StatLabel>anos de experiência</S.StatLabel>
              </S.StatItem>
              <S.StatItem>
                <S.StatValue>4.9</S.StatValue>
                <S.StatLabel>Avaliação média</S.StatLabel>
              </S.StatItem>
            </S.HeroStats>
          </S.HeroContent>
          <S.HeroImageWrapper>
            <S.HeroImage
              src={ImageHero}
              alt="Carro com polimento profissional brilhando"
              width="400px"
            />
          </S.HeroImageWrapper>
        </S.Grid>
      </S.Container>
      <S.DecorativeLine />
    </S.HeroSection>
  )
}

export default Hero
