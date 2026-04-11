import * as S from './styles'

import imageFarol from '../../assets/polFarol.jpeg'
import imagePolComp from '../../assets/polComp.jpeg'
import imageBancos from '../../assets/AntesDepoisBancos.jpeg'
import imageLavagem from '../../assets/lavagem.jpeg'

function Services() {
  const services = [
    {
      img: imageFarol,
      title: 'Restauração de Farol',
      description:
        'Tratamento especial para restaurar o brilho e a clareza do farol.'
    },
    {
      img: imagePolComp,
      title: 'Polimento Completo',
      description:
        'Serviço completo de polimento e detalhamento para restaurar o brilho e a aparência do seu veículo.'
    },
    {
      img: imageBancos,
      title: 'Higienização de Bancos',
      description:
        'Tratamento especial para restaurar o brilho e a aparência dos bancos do veículo.'
    },
    {
      img: imageLavagem,
      title: 'Lavagem Completa',
      description:
        'Serviço completo de lavagem para manter seu veículo limpo e em perfeito estado.'
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

        <S.TesteGrid>
          {services.map((service, index) => {
            return (
              <S.Teste key={index}>
                <img src={service.img} alt={service.title} />
                <div>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </S.Teste>
            )
          })}
        </S.TesteGrid>

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
