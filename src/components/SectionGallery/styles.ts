import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const GalleryWrapper = styled.section`
  padding: 80px 1.5rem 0 1.5rem;
  background-color: ${colors.teste2};
  @media (min-width: ${breakpoints.tablet}) {
    padding: 128px 1.5rem 80px 1.5rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 80px 1rem 80px 1rem;
  }
`

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

export const SectionHeader = styled.div`
  max-width: 768px;
  margin: 0 auto 64px;
  text-align: center;
`

export const SectionTitle = styled.h2`
  font-size: 40px;
  line-height: 1.2;
  color: ${colors.primary};
  margin-bottom: 16px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 48px;
  }
`

export const SectionDescription = styled.p`
  font-size: 18px;
  color: ${colors.gray600};
`

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 48px;
`

export const FilterButton = styled.button<{ isActive: boolean }>`
  padding: 8px 24px;
  border-radius: 9999px;
  font-weight: 500;
  transition: all 300ms ease-out;
  cursor: pointer;
  border: none;
  background-color: ${(props) => (props.isActive ? colors.primary : '#f3f4f6')};
  color: ${(props) => (props.isActive ? colors.white : '#374151')};

  &:hover {
    background-color: ${(props) =>
      props.isActive ? colors.primary : '#e5e7eb'};
  }
`

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 64px;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`

export const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  group: true;
`

export const GalleryImage = styled.img`
  width: 100%;
  height: 256px;
  object-fit: cover;
  transition: transform 500ms ease-out;

  @media (min-width: ${breakpoints.tablet}) {
    height: 320px;
  }

  ${GalleryItem}:hover & {
    transform: scale(1.1);
  }
`

export const GalleryOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  opacity: 0;
  transition: opacity 500ms ease-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;

  ${GalleryItem}:hover & {
    opacity: 1;
  }
`

export const OverlayTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 8px;
`

export const OverlayDescription = styled.p`
  font-size: 14px;
  color: #f3f4f6;
`

export const CTASection = styled.div`
  text-align: center;
`

export const CTAText = styled.p`
  color: ${colors.gray600};
  margin-bottom: 24px;
`

export const CTALink = styled.a`
  display: inline-block;
  background-color: ${colors.primary};
  color: ${colors.white};
  font-weight: 600;
  padding: 12px 32px;
  border-radius: 8px;
  transition: background-color 300ms ease-out;
  text-decoration: none;

  &:hover {
    background-color: #1e3a8a;
  }
`
