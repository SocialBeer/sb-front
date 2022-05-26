import styled from 'styled-components'

export const Text = styled.span`
  text-decoration: none;
  font-size: ${({ fs }) => fs};
  font-weight: ${({ fw }) => fw};
  margin: ${({ m }) => m};
`

export const Heading1 = styled.h1`
  text-decoration: none;
  font-size: 72px;
  font-weight: 700;
  margin: ${({ m }) => m};
`

export const Heading2 = styled.h2`
  text-decoration: none;
  font-size: 48px;
  font-weight: 700;
  margin: ${({ m }) => m};
`

export const Heading3 = styled.h3`
  text-decoration: none;
  font-size: 28px;
  font-weight: 600;
  margin: ${({ m }) => m};
`

export const SubHeading = styled.p`
  text-decoration: none;
  font-size: 14px;
  font-weight: 300;
  margin: ${({ m }) => m};
`
