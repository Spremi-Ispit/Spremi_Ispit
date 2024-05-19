import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { images, privateClasses } from '../../../../constants';
import { useWindowSize } from '@uidotdev/usehooks';
import Button from '../../../../components/buttons/Button';
import { screensCSS } from '../../../../utils/useScreens';
import colors from '../../../../theme/colors';
import GroupsIcon from '@mui/icons-material/Groups';
import BoyIcon from '@mui/icons-material/Boy';

const topClass = [];
for (const key in privateClasses) {
  const image = privateClasses[key];
  topClass.push(image);
}

const message = () => `Želim da zakažem čas u privatnoj školi TopClass.`;

const TopClass = () => {
  const { width } = useWindowSize();

  return (
    <TopClassDiv>
      <TopClassHeader>TopClass</TopClassHeader>
      <TopClassImagesDiv>
        <ImagesWrapperDiv>
          <ImageGallery
            items={topClass.map((image) => ({
              // thumbnail: image,
              original: image,
            }))}
            infinite
            autoPlay
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
          />
        </ImagesWrapperDiv>
      </TopClassImagesDiv>
      <DescriptionDiv>
        Privatna škola sa vrhunskim timom predavača i nastavom prilagođenom
        vašim potrebama, garantuje kvalitet i efikasnost u savladavanju gradiva.
      </DescriptionDiv>
      <TopClassFooterDiv>
        <PricesDiv>
          <PriceDiv>Cena:</PriceDiv>
          <StyledGroupsIcon />
          1000
          <DividerDiv />
          <BoyIcon />
          1200
        </PricesDiv>
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

const DividerDiv = styled.div`
  border: 1px solid black;
  margin: 5px;
  height: 15px;
`;

const StyledGroupsIcon = styled(GroupsIcon)`
  margin-right: 5px;
`;

const PriceDiv = styled.div`
  margin-right: 5px;
`;

const PricesDiv = styled.div`
  background: ${colors.background};
  padding: 5px 10px 5px 5px;
  border-radius: 10px;
  display: flex;
  width: fit-content;
  align-items: center;
`;

const TopClassHeader = styled.h3`
  text-align: center;
`;

const TopClassImagesDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ImagesWrapperDiv = styled.div`
  width: 200px;
`;

const TopClassFooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
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
  display: flex;
  flex-direction: column;
  border: 3px solid #bababa;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  gap: 10px;

  max-width: 750px;
  width: 100%;
  margin-bottom: 20px;
`;
