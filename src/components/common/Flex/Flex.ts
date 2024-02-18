import styled from '@emotion/styled';

const Flex = styled.div<{ gap?: string; alignItems?: string; justifyContent?: string }>`
  display: flex;
  ${({ gap }) => gap && `gap: ${gap}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`};
`;

export default Flex;
