import styled from 'styled-components'
import { colors, breakpoints } from '../../styles'

export const TestimonialsWrapper = styled.section`
  padding: 80px 1.5rem 0 1.5rem;
  background-color: ${colors.teste};

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

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 64px;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`

export const TestimonialCard = styled.div`
  background-color: ${colors.white};
  padding: 32px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  transition: all 300ms ease-out;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
`

export const StarsContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
`

export const TestimonialContent = styled.p`
  color: #374151;
  line-height: 1.6;
  margin-bottom: 24px;
  font-style: italic;
`

export const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const AuthorImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #e5e7eb;
`

export const AuthorInfo = styled.div``

export const AuthorName = styled.p`
  font-weight: 600;
  color: #111827;
`

export const AuthorRole = styled.p`
  font-size: 14px;
  color: #4b5563;
`

export const StatsSection = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const StatItem = styled.div`
  text-align: center;
`

export const StatNumber = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 8px;
`

export const StatLabel = styled.p`
  color: ${colors.gray600};
`
