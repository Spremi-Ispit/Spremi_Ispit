import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { images, privateClasses } from '../../../../constants';
import { useWindowSize } from '@uidotdev/usehooks';
import Button from '../../../../components/buttons/Button';
import { screensCSS } from '../../../../utils/useScreens';

const topClass = [];
for (const key in privateClasses) {
  const image = privateClasses[key];
  topClass.push(image);
}

const message = () => `Želim da zakažem čas u privatnoj školi TopClass.`;

const TopClass = () => {
  const { width } = useWindowSize();

  return (
    <TopClassDiv $width={width}>
      <ImageGallery
        items={topClass.map((image) => ({
          thumbnail: image,
        }))}
        infinite
        autoPlay
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={false}
      />
      <TopClassFooterDiv>
        <DescriptionDiv>
          Privatna škola <b>TopClass</b> sa vrhunskim timom predavača i nastavom
          prilagođenom vašim potrebama, garantuje kvalitet i efikasnost u
          savladavanju gradiva.
        </DescriptionDiv>
        <TutorButton
          onClick={() => {
            location.href = `https://wa.me/381607154400?text=${message()}`;
          }}
        >
          <WhatsAppImg src={images.WhatsApp1} />
          <h4>Zakaži čas</h4>
        </TutorButton>
      </TopClassFooterDiv>
    </TopClassDiv>
  );
};

export default TopClass;

const TopClassFooterDiv = styled.div`
  display: flex;
  gap: 5px;
  align-items: end;

  @media ${screensCSS.mobileL} {
    flex-direction: column;
    align-items: center;
  }
`;

const TutorButton = styled(Button)`
  background-color: #32d851;
  color: white;
  gap: 5px;
  max-height: 40px;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 2px;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 2px;
    color: white;
    background-color: #32d851;
  }
`;

const WhatsAppImg = styled.img`
  width: 24px;
  height: 24px;
`;

const DescriptionDiv = styled.div`
  font-style: italic;
`;

const TopClassDiv = styled.div`
  width: ${({ $width }) => $width - 40}px;
  max-width: 100%;
`;
