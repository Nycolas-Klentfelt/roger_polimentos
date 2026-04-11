import { useState } from 'react'
import imagePolishing from '../../assets/polishing-process.jpg'
import imageBeforeafter from '../../assets/before-after-transformation.jpg'
import imageTeam from '../../assets/team-workshop.jpg'
import ImageCar from '../../assets/hero-car-shine.jpg'
import * as S from './styles'

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const galleryItems = [
    {
      id: 1,
      category: 'polimento',
      title: 'Polimento Profissional',
      image: imagePolishing,
      description: 'Processo de polimento em ação'
    },
    {
      id: 2,
      category: 'antes-depois',
      title: 'Transformação Completa',
      image: imageBeforeafter,
      description: 'Antes e depois do polimento'
    },
    {
      id: 3,
      category: 'equipe',
      title: 'Nossa Equipe',
      image: imageTeam,
      description: 'Técnicos profissionais em ação'
    },
    {
      id: 4,
      category: 'polimento',
      title: 'Brilho Espelhado',
      image: ImageCar,
      description: 'Resultado final impecável'
    }
  ]

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'polimento', label: 'Polimento' },
    { id: 'antes-depois', label: 'Antes e Depois' },
    { id: 'equipe', label: 'Nossa Equipe' }
  ]

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <S.GalleryWrapper id="gallery">
      <S.Container>
        <S.SectionHeader>
          <S.SectionTitle>Galeria de Trabalhos</S.SectionTitle>
          <S.SectionDescription>
            Veja os resultados incríveis que alcançamos com nossos clientes.
          </S.SectionDescription>
        </S.SectionHeader>
        <S.FilterContainer>
          {categories.map((category) => (
            <S.FilterButton
              key={category.id}
              isActive={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </S.FilterButton>
          ))}
        </S.FilterContainer>
        <S.GalleryGrid>
          {filteredItems.map((item) => (
            <S.GalleryItem key={item.id}>
              <S.GalleryImage src={item.image} alt={item.title} />
              <S.GalleryOverlay>
                <S.OverlayTitle>{item.title}</S.OverlayTitle>
                <S.OverlayDescription>{item.description}</S.OverlayDescription>
              </S.GalleryOverlay>
            </S.GalleryItem>
          ))}
        </S.GalleryGrid>
        <S.CTASection>
          <S.CTAText>
            Quer ver mais trabalhos? Visite nosso Instagram para uma galeria
            completa.
          </S.CTAText>
          <S.CTALink
            href="https://www.instagram.com/r_poliment0s/"
            target="_blank"
          >
            Seguir no Instagram
          </S.CTALink>
        </S.CTASection>
      </S.Container>
    </S.GalleryWrapper>
  )
}

export default Gallery
