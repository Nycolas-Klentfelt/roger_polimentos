import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#1E40AF',
  primaryDark: '#1E3A8A',
  primaryLight: '#3B82F6',
  white: '#FFFFFF',
  black: '#000000',
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray600: '#4B5563',
  gray700: '#374151',
  gray900: '#111827',
  blue50: '#EFF6FF',
  blue100: '#DBEAFE'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: sans-serif;
  }

  .container{
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`

export const Button = styled.button`
  display: flex;
  color: ${colors.white};
  background-color: ${colors.primary};
  font-size: 12px;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`
