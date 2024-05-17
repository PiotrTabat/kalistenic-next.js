import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import Image from 'next/image';

import Image1 from '../public/images/Carousel1.jpg';
import Image2 from '../public/images/Carousel2.jpg';
import Image3 from '../public/images/Carousel3.jpg';
import Image4 from '../public/images/Carousel4.jpg';
import Image5 from '../public/images/Carousel5.jpg';
import Image6 from '../public/images/Carousel6.jpg';
import Image7 from '../public/images/Carousel7.jpg';
import Image8 from '../public/images/Carousel8.jpg';
import Image9 from '../public/images/Carousel9.jpg';
import Image10 from '../public/images/Carousel10.jpg';
import Image11 from '../public/images/Carousel11.jpg';
import Image12 from '../public/images/Carousel12.jpg';
import Image13 from '../public/images/Carousel13.jpg';
import Image14 from '../public/images/Carousel14.jpg';
import Image15 from '../public/images/Carousel15.jpg';
import Image16 from '../public/images/Carousel16.jpg';
import Image17 from '../public/images/Carousel17.jpg';
import Image18 from '../public/images/Carousel18.jpg';
import Image19 from '../public/images/Carousel19.jpg';
import Image20 from '../public/images/Carousel20.jpg';
import Image21 from '../public/images/Carousel21.jpg';
import Image22 from '../public/images/Carousel22.jpg';
import Image23 from '../public/images/Carousel23.jpg';
import Image24 from '../public/images/Carousel24.jpg';
import Image25 from '../public/images/Carousel25.jpg';

const CarouselContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const CarouselImage = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
  img {
    object-fit: cover;
  }
`;

const Disclaimer = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #888;
`;

const ImageCarousel = () => {
    return (
        <CarouselContainer>
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                <CarouselImage>
                    <Image src={Image1} alt="EMS Training 1" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image2} alt="EMS Training 2" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image3} alt="EMS Training 3" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image4} alt="EMS Training 4" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image5} alt="EMS Training 5" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image6} alt="EMS Training 6" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image7} alt="EMS Training 7" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image8} alt="EMS Training 8" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image9} alt="EMS Training 9" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image10} alt="EMS Training 10" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image11} alt="EMS Training 11" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image12} alt="EMS Training 12" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image13} alt="EMS Training 13" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image14} alt="EMS Training 14" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image15} alt="EMS Training 15" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image16} alt="EMS Training 16" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image17} alt="EMS Training 17" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image18} alt="EMS Training 18" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image19} alt="EMS Training 19" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image20} alt="EMS Training 20" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image21} alt="EMS Training 21" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image22} alt="EMS Training 22" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image23} alt="EMS Training 23" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image24} alt="EMS Training 24" layout="fill" />
                </CarouselImage>
                <CarouselImage>
                    <Image src={Image25} alt="EMS Training 25" layout="fill" />
                </CarouselImage>
            </Carousel>
            <Disclaimer>
                Wszystkie prawa do obrazów należą do ich właścicieli.
            </Disclaimer>
        </CarouselContainer>
    );
};

export default ImageCarousel;
