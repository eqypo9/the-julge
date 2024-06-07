import styled from 'styled-components';

export const SigninFormLayout = styled.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 350px;

  @media (max-width: '744px') {
    width: 100%;
  }
`;
