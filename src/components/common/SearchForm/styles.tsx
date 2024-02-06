import styled from '@emotion/styled';

export const Input = styled.input(
  ({ theme }) => `
  width: 100%;
  background: ${theme.colors.background.searchInput};
  outline: none;
  font-size: 1rem;
  padding: 16px 12px;
  padding-left: 48px;
  border: 1px solid ${theme.colors.border.searchInput};
  color: ${theme.colors.typography.secondary};
  font-family: 'Fira Mono', 'Andale Mono', 'Consolas', monospace;
  &::placeholder {
    font-size: .875rem;
    color: ${theme.colors.typography.searchPlaceholder};
  };
  &:focus {
    border: 1px solid ${theme.colors.border.searchInputFocus};
  };
`,
);

export const Button = styled.button(
  ({ theme }) => `
  padding: 8px 32px;
  font-size: .875rem;
  font-weight: 700;
  background-color: ${theme.colors.background.searchButton};
  color: ${theme.colors.typography.searchButton};
  border: none;
  cursor: pointer;
  letter-spacing: 0.3px;
  font-family: 'Poppins';
`,
);

export const Form = styled.form`
  display: flex;
  flex-grow: 1;
`;

export const SearchIconContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 100%;
`;
export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;
