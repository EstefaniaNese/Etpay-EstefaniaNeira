import { Container, Title, Description, IconContainer } from "./FeatureIcon.styled";

import MetricsIcon from "../../assets/icon/MetricsIcon.svg";
import RegistrationIcon from "../../assets/icon/RegistrationIcon.svg";
import BrandedIcon from "../../assets/icon/BrandedIcon.svg";
import AppIcon from "../../assets/icon/AppIcon.svg";
import EngagementIcon from "../../assets/icon/EngagementIcon.svg";
import CalendarIcon from "../../assets/icon/CalendarIcon.svg";

export type FeatureIconProps = {
    icon: string;
    title: string;
    description: string;
}

export const FeatureIcon = ({ icon, title, description }: FeatureIconProps) => {

    const icons: { [key: string]: string } = {
        "MetricsIcon": MetricsIcon,
        "RegistrationIcon": RegistrationIcon,
        "BrandedIcon": BrandedIcon,
        "AppIcon": AppIcon,
        "EngagementIcon": EngagementIcon,
        "CalendarIcon": CalendarIcon
    }

    return (
        <Container>
            <IconContainer>
                <img src={icons[icon]} alt="icon" />
            </IconContainer>
            <div>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </div>
        </Container>
    )
}
