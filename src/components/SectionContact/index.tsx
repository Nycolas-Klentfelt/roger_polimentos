import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import * as S from './styles'

function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefone',
      value: '(11) 99999-9999',
      href: 'tel:+5511999999999'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contato@rogerpolimentos.com.br',
      href: 'mailto:contato@rogerpolimentos.com.br'
    },
    {
      icon: MapPin,
      label: 'Endereço',
      value: 'Araucária, PR',
      href: '#'
    },
    {
      icon: Clock,
      label: 'Horário',
      value: 'Seg-Sab: 9h-18h',
      href: '#'
    }
  ]

  return (
    <S.ContactWrapper id="contact">
      <S.Container>
        <S.SectionHeader>
          <S.SectionTitle>Entre em Contato</S.SectionTitle>
          <S.SectionDescription>
            Solicite um orçamento ou tire suas dúvidas com nossa equipe.
          </S.SectionDescription>
        </S.SectionHeader>
        <S.ContentGrid>
          <S.InfoSection>
            <S.InfoTitle>Informações de Contato</S.InfoTitle>
            <S.InfoText>
              Estamos aqui para ajudar! Entre em contato conosco através de
              qualquer um dos canais abaixo.
            </S.InfoText>
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <S.InfoItem key={index} href={info.href}>
                  <S.IconWrapper>
                    <S.IconColor>
                      <Icon size={24} />
                    </S.IconColor>
                  </S.IconWrapper>
                  <div>
                    <S.InfoLabel>{info.label}</S.InfoLabel>
                    <S.InfoValue>{info.value}</S.InfoValue>
                  </div>
                </S.InfoItem>
              )
            })}
            <S.SocialSection>
              <S.SocialTitle>Siga-nos</S.SocialTitle>
              <S.SocialLinks>
                <S.SocialLink
                  href="https://www.instagram.com/r_poliment0s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  📷
                </S.SocialLink>
                <S.SocialLink
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                >
                  💬
                </S.SocialLink>
              </S.SocialLinks>
            </S.SocialSection>
          </S.InfoSection>
        </S.ContentGrid>
      </S.Container>
    </S.ContactWrapper>
  )
}

export default Contact
