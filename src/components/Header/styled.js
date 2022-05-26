import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 24px 0;
  display: flex;
  background: ${({ theme }) => theme.header.background};
  justify-content: space-between;
`
export const LoginSection = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-left: 1px solid ${({ theme }) => theme.colors.black15};
  gap: 12px;
`
