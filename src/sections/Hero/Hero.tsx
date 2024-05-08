import { useEffect, useRef } from "react";
import Typed from "typed.js";

import { Section, Container, Title, SubTitleContainer, SubTitle, ImageContainer, Image } from './Hero.styled';
import { Button } from "../../components/Button";
import { Divider } from "../../components/Divider";
import Mockups from '../../assets/images/mockups.png';


export const Hero = () => {


  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Manage your event registrations hassle free and without any dependency with the technical team. Isn’t it sounds amazing?", ], 
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 100
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Section>
      <Container>
        <div>
          <Title>
              Event Registration Reimagined
          </Title>
          <SubTitleContainer>
            <SubTitle ref={el}></SubTitle>
          </SubTitleContainer>
          <Button>
              Get Early Access
          </Button>
        </div>
          <ImageContainer>
              <Image src={Mockups} alt="Mockups" />
          </ImageContainer>
      </Container>
        <Divider />
    </Section>
  )
}
