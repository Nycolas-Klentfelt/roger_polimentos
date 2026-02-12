import { Sparkles, Shield, Zap, Droplets } from 'lucide-react'
import * as S from './styles'

function Services() {
  const services = [
    {
      icon: Sparkles,
      title: 'Polimento Profissional',
      description:
        'Remoção de oxidação, riscos leves e restauração do brilho original com técnicas especializadas.'
    },
    {
      icon: Shield,
      title: 'Proteção Cerâmica',
      description:
        'Aplicação de revestimento cerâmico de longa duração para proteção contra agentes externos.'
    },
    {
      icon: Droplets,
      title: 'Hidrofobia',
      description:
        'Tratamento especial que repele água e mantém seu carro limpo por mais tempo.'
    },
    {
      icon: Zap,
      title: 'Detalhamento Completo',
      description:
        'Serviço completo incluindo limpeza profunda, polimento e aplicação de proteção.'
    }
  ]

  return (
    <S.ServicesWrapper id="services">
      <S.Container>
        <S.SectionHeader>
          <S.SectionTitle>Nossos Serviços</S.SectionTitle>
          <S.SectionDescription>
            Oferecemos uma gama completa de serviços de polimento e detalhamento
            automotivo com qualidade profissional.
          </S.SectionDescription>
        </S.SectionHeader>

        <S.ServicesGrid>
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <S.ServiceCard key={index}>
                <S.IconWrapper>
                  <S.IconColor>
                    <Icon size={28} />
                  </S.IconColor>
                </S.IconWrapper>
                <S.ServiceTitle>{service.title}</S.ServiceTitle>
                <S.ServiceDescription>
                  {service.description}
                </S.ServiceDescription>
                <S.DecorativeLine />
              </S.ServiceCard>
            )
          })}
        </S.ServicesGrid>

        <S.InfoBox>
          <S.InfoGrid>
            <S.InfoItem>
              <S.InfoTitle>Produtos Premium</S.InfoTitle>
              <S.InfoText>
                Utilizamos apenas produtos de primeira linha, importados e
                testados.
              </S.InfoText>
            </S.InfoItem>
            <S.InfoItem>
              <S.InfoTitle>Técnicos Certificados</S.InfoTitle>
              <S.InfoText>
                Nossa equipe possui certificações internacionais em detalhamento
                automotivo.
              </S.InfoText>
            </S.InfoItem>
            <S.InfoItem>
              <S.InfoTitle>Garantia de Qualidade</S.InfoTitle>
              <S.InfoText>
                Garantimos satisfação total ou devolvemos seu dinheiro.
              </S.InfoText>
            </S.InfoItem>
          </S.InfoGrid>
        </S.InfoBox>
      </S.Container>
    </S.ServicesWrapper>
  )
}

export default Services
