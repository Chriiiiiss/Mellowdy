import { Flex } from '@radix-ui/themes';
import styled from 'styled-components';

const ProfilContainer = styled(Flex)`
  width: 100vw;
  overflow-x: scroll;
  margin: 0 -24px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImageStyled = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 100px;

  &:first-of-type {
    margin-left: 24px;
  }

  &:last-of-type {
    margin-right: 24px;
  }
`;

const ScrollableProfile = () => {
  return (
    <ProfilContainer gap={'4'}>
      <ImageStyled src="https://placehold.co/60x60" />
      <ImageStyled src="https://placehold.co/60x60" />
      <ImageStyled src="https://placehold.co/60x60" />
      <ImageStyled src="https://placehold.co/60x60" />
      <ImageStyled src="https://placehold.co/60x60" />
      <ImageStyled src="https://placehold.co/60x60" />
      <ImageStyled src="https://placehold.co/60x60" />
      <ImageStyled src="https://placehold.co/60x60" />
      <ImageStyled src="https://placehold.co/60x60" />
      <ImageStyled src="https://placehold.co/60x60" />
      <ImageStyled src="https://placehold.co/60x60" />
      <ImageStyled src="https://placehold.co/60x60" />
    </ProfilContainer>
  );
};

export default ScrollableProfile;
