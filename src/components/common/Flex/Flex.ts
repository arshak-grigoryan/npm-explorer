import styled from '@emotion/styled';

const Flex = styled.div<{ gap?: string; alignItems?: string }>`
  display: flex;
  ${({ gap }) => gap && `gap: ${gap}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
`;

export default Flex;
