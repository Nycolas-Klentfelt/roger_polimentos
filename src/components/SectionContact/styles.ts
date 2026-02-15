import styled from 'styled-components'
import { colors, spacing, breakpoints } from '../../styles'

export const ContactWrapper = styled.section`
  padding: 80px ${spacing.lg};
  background-color: ${colors.white};

  @media (min-width: ${breakpoints.tablet}) {
    padding: 128px ${spacing.lg};
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 80px ${spacing.md};
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
  color: #4b5563;
`

export const ContentGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InfoSection = styled.div``

export const InfoTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 24px;
  text-align: center;
`

export const InfoText = styled.p`
  color: #4b5563;
  margin-bottom: 32px;
`

export const InfoItem = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  transition: background-color 300ms ease-out;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #eff6ff;
  }
`

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background-color: #eff6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 300ms ease-out;

  ${InfoItem}:hover & {
    background-color: ${colors.primary};
  }
`

export const IconColor = styled.div`
  color: ${colors.primary};
  transition: color 300ms ease-out;

  ${InfoItem}:hover & {
    color: ${colors.white};
  }
`

export const InfoLabel = styled.p`
  font-size: 14px;
  color: #4b5563;
  font-weight: 500;
`

export const InfoValue = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
`

export const SocialSection = styled.div`
  padding-top: 32px;
  border-top: 1px solid #e5e7eb;
`

export const SocialTitle = styled.h4`
  font-weight: 600;
  color: #111827;
  margin-bottom: 16px;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`

export const SocialLink = styled.a`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 20px;
  transition: all 300ms ease-out;
  text-decoration: none;

  &:last-child {
    background-color: #22c55e;
  }

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`
