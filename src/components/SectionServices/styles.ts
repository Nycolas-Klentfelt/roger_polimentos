import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ServicesWrapper = styled.section`
  padding: 80px 1.5rem 0 1.5rem;
  background-color: ${colors.teste};
  @media (min-width: ${breakpoints.tablet}) {
    padding: 128px 1.5rem 0 1.5rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 80px 1rem 0 1rem;
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

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 64px;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`

export const ServiceCard = styled.div`
  background-color: ${colors.white};
  padding: 32px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  transition: all 300ms ease-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
`

export const IconWrapper = styled.div<{ isHovered?: boolean }>`
  width: 56px;
  height: 56px;
  background-color: #eff6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  transition: all 300ms ease-out;

  ${ServiceCard}:hover & {
    background-color: ${colors.primary};
  }
`

export const IconColor = styled.div`
  color: ${colors.primary};
  transition: color 300ms ease-out;

  ${ServiceCard}:hover & {
    color: ${colors.white};
  }
`

export const ServiceTitle = styled.h3`
  font-size: 20px;
  color: ${colors.primary};
  margin-bottom: 12px;
  font-weight: 700;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
`

export const ServiceDescription = styled.p`
  color: #4b5563;
  line-height: 1.6;
`

export const DecorativeLine = styled.div`
  width: 48px;
  height: 4px;
  background: linear-gradient(to right, ${colors.primary}, transparent);
  margin-top: 24px;
  opacity: 0;
  transition: opacity 300ms ease-out;

  ${ServiceCard}:hover & {
    opacity: 1;
  }
`

export const InfoBox = styled.div`
  background-color: ${colors.white};
  padding: 32px 48px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
`

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const InfoItem = styled.div``

export const InfoTitle = styled.h4`
  font-weight: 700;
  color: ${colors.primary};
  font-size: 18px;
  margin-bottom: 8px;
`

export const InfoText = styled.p`
  color: #4b5563;
  font-size: 14px;
`
