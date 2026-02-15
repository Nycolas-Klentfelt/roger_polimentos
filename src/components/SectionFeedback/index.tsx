import { Star } from 'lucide-react'
import * as S from './styles'

function Feedback() {
  const testimonials = [
    {
      id: 1,
      name: 'Carlos Silva',
      role: 'Proprietário de BMW',
      content:
        'Excelente trabalho! Meu carro ficou com um brilho que não tinha há anos. A equipe foi muito profissional e atenciosa.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos'
    },
    {
      id: 2,
      name: 'Marina Costa',
      role: 'Proprietária de Mercedes',
      content:
        'Recomendo muito! O polimento ficou perfeito e a proteção cerâmica está funcionando maravilhosamente bem.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marina'
    },
    {
      id: 3,
      name: 'Roberto Oliveira',
      role: 'Proprietário de Audi',
      content:
        'Serviço de qualidade superior. Voltarei com certeza para manutenção. Muito satisfeito com o resultado.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto'
    },
    {
      id: 4,
      name: 'Juliana Ferreira',
      role: 'Proprietária de Tesla',
      content:
        'Profissionais competentes e atenciosos. Meu carro nunca esteve tão brilhante. Muito obrigada!',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juliana'
    }
  ]

  const renderStars = (rating: number) => {
    return (
      <S.StarsContainer>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < rating ? '#FBBF24' : '#D1D5DB'}
            color={i < rating ? '#FBBF24' : '#D1D5DB'}
          />
        ))}
      </S.StarsContainer>
    )
  }

  return (
    <S.TestimonialsWrapper id="testimonials">
      <S.Container>
        <S.SectionHeader>
          <S.SectionTitle>O que Nossos Clientes Dizem</S.SectionTitle>
          <S.SectionDescription>
            Avaliações reais de clientes satisfeitos com nossos serviços.
          </S.SectionDescription>
        </S.SectionHeader>

        <S.TestimonialsGrid>
          {testimonials.map((testimonial) => (
            <S.TestimonialCard key={testimonial.id}>
              {renderStars(testimonial.rating)}
              <S.TestimonialContent>{testimonial.content}</S.TestimonialContent>
              <S.AuthorSection>
                <S.AuthorImage src={testimonial.image} alt={testimonial.name} />
                <S.AuthorInfo>
                  <S.AuthorName>{testimonial.name}</S.AuthorName>
                  <S.AuthorRole>{testimonial.role}</S.AuthorRole>
                </S.AuthorInfo>
              </S.AuthorSection>
            </S.TestimonialCard>
          ))}
        </S.TestimonialsGrid>

        <S.StatsSection>
          <S.StatItem>
            <S.StatNumber>4.9★</S.StatNumber>
            <S.StatLabel>Avaliação média</S.StatLabel>
          </S.StatItem>
          <S.StatItem>
            <S.StatNumber>500+</S.StatNumber>
            <S.StatLabel>Clientes satisfeitos</S.StatLabel>
          </S.StatItem>
          <S.StatItem>
            <S.StatNumber>98%</S.StatNumber>
            <S.StatLabel>Taxa de recomendação</S.StatLabel>
          </S.StatItem>
        </S.StatsSection>
      </S.Container>
    </S.TestimonialsWrapper>
  )
}

export default Feedback
