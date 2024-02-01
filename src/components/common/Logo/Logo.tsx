import LogoIcon from 'src/assets/npm-logo-black.svg?react';
import * as SC from './styles';

export default function Logo() {
  return (
    <SC.Logo>
      <LogoIcon height={18} />
      <SC.LogoText>Explorer</SC.LogoText>
    </SC.Logo>
  );
}
