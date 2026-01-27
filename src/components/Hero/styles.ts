import styled from 'styled-components'
import { breakpoints, colors, spacing } from '../../styles'

export const HeroSection = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${colors.white};
  padding-top: 80px;
  padding-bottom: 64px;

  @media (min-width: ${breakpoints.tablet}) {
    padding-top: 128px;
    padding-bottom: 96px;
  }
`

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 ${spacing.md};
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const HeroText = styled.div``

export const HeroTagline = styled.span`
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.primary};
  background-color: #eff6ff;
  padding: ${spacing.sm} ${spacing.lg};
  border-radius: 9999px;
  width: fit-content;
`

export const HeroTitle = styled.h2`
  font-size: 48px;
  line-height: 1.2;
  color: ${colors.primary};
  font-weight: 700;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 64px;
  }
`

export const HeroDescription = styled.p`
  font-size: 20px;
  color: ${colors.gray600};
  line-height: 1.6;
  max-width: 448px;
`

export const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;

  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
  }
`

export const PrimaryButton = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  font-weight: 600;
  padding: 24px 32px;
  border-radius: 8px;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background-color 300ms ease-out;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #1e3a8a;
  }
`

export const SecondaryButton = styled.button`
  border: 2px solid ${colors.primary};
  color: ${colors.primary};
  background-color: transparent;
  font-weight: 600;
  padding: 22px 32px;
  border-radius: 8px;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 300ms ease-out;
  cursor: pointer;

  &:hover {
    background-color: #eff6ff;
  }
`

export const HeroStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 32px;
  border-top: 1px solid #e5e7eb;

  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
  }
`

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`

export const StatValue = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 8px;
`

export const StatLabel = styled.p`
  font-size: 14px;
  color: #4b5563;
`

export const HeroImageWrapper = styled.div`
  position: relative;
  height: 384px;

  @media (min-width: ${breakpoints.tablet}) {
    height: 100%;
    min-height: 384px;
  }
`

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
`

export const DecorativeLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    to right,
    ${colors.primary},
    #3b82f6,
    transparent
  );
`
