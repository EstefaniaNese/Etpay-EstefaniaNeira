
import { Section, Title, Subtitle, Logos, Container } from "./Integrations.styled";

import Logo1 from "../../assets/logo/logoSlack.svg";
import Logo2 from "../../assets/logo/logoQuickbooks.svg";
import Logo3 from "../../assets/logo/logoMailchimp.svg";
import Logo4 from "../../assets/logo/logoHubspot.svg";
import Logo5 from "../../assets/logo/logoZapier.svg";
import Logo6 from "../../assets/logo/logoGoogleAnalytics.svg";
import Logo7 from "../../assets/logo/logoMarketo.svg";

export type LogoContainerProps = {
    name: string;
}

export const LogoContainer = ({ name }: LogoContainerProps) => {

    const logosComponent: { [key: string]: string } = {
        "Logo1": Logo1,
        "Logo2": Logo2,
        "Logo3": Logo3,
        "Logo4": Logo4,
        "Logo5": Logo5,
        "Logo6": Logo6,
        "Logo7": Logo7,
    }

    return (
        <Container>
            <img src={logosComponent[name]} alt="icon" />
        </Container>
    )
}

export const Integrations = () => {

    const logos = ['Logo1', 'Logo2', 'Logo3', 'Logo4', 'Logo5', 'Logo6', 'Logo7'];

    return (
        <Section>
            <div>
                <Title>
                    Integrate with your favorite tools
                </Title>
                <Subtitle>Connect RegiM with your most favorite sales and marketing tools</Subtitle>
            </div>
            <Logos>
                {
                    logos.map(logo => (
                        <LogoContainer key={logo} name={logo} />
                    ))
                }
            </Logos>
        </Section>
    )
}