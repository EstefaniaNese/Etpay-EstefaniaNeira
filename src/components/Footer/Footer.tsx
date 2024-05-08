import {Button} from "../../components/Button"
import { Container, Title, TextContainer, Text, ButtonContainer, LogoContainer, LogoDivider, BottomText, InfoContainer } from './Footer.styled';
import logoMarkRegim from "../../assets/logo/LogoMarkRegim.svg";

export const Footer = () => {
    return (
        <Container>
            <Title>
                Create your event with RegiM
            </Title>
            <TextContainer>
                <Text>
                    Leveraging our virtual and live event experience, Hubilo offers everything you need to set up your next hybrid event from registration to executing a flawless event.
                </Text>
            </TextContainer>
            <ButtonContainer>
                <Button>
                    Get Early Access
                </Button>
            </ButtonContainer>
            <LogoContainer>
                <LogoDivider />
                <img src={logoMarkRegim} alt="Logo"/>
                <LogoDivider />
            </LogoContainer>
            <InfoContainer>
                <BottomText>
                    © RegiM 2022. Made with love by <span>Landify</span>
                </BottomText>
                <BottomText>
                    For further details, drop a mail to <span>hello@landify.design</span>
                </BottomText>
            </InfoContainer>
        </Container>
    )
}


