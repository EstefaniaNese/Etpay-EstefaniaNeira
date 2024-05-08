/* eslint-disable react-refresh/only-export-components */
import { Section, Title, Subtitle, ImageContainer, Image, PlayButton, FeaturesContainer } from './Features.styled';
import Thumbnail from "../../assets/images/video-thumbnail.png";
import { Divider } from "../../components/Divider";
import { FeatureIcon } from "../../components/FeatureIcon/FeatureIcon"


export type Feature = {
    id: string;
    icon: string;
    title: string;
    description: string;
}


export const features: Feature[] = [
    {   
        id: '1',
        icon: 'MetricsIcon',
        title: 'Event Metrics',
        description: 'Track your ticket sales, attendees count and more with much ease.',
    },
    {
        id: '2',
        icon: 'RegistrationIcon',
        title: 'Registration & Ticketing',
        description: 'Manage your Event registrations and ticket sales easier and receive payments instantly.',
    },
    {
        id: '3',
        icon: 'BrandedIcon',
        title: 'Branded Badges',
        description: 'Create your custom branded badges for your events and get them printed.',
    },
    {
        id: '4',
        icon: 'AppIcon',
        title: 'Oragniser App',
        description: 'Manage your events at the palm of your hand with our Oragniser App.',
    },
    {
        id: '5',
        icon: 'EngagementIcon',
        title: 'Attendee Engagement',
        description: 'Engage with your attendees via email, surveys and much more.',
    },
    {
        id: '6',
        icon: 'CalendarIcon',
        title: 'Add to Calendar',
        description: 'Effortless way to add your events to registered users calendars by 1-click.',
    },
];

export const Features = () => {
  return (
    <Section>
        <Title>
            All-in-one Event Platform
        </Title>
        <Subtitle>Deliver an exceptional event experience</Subtitle>
        <ImageContainer>
            <Image src={Thumbnail} alt="" />
            <PlayButton >
                See it in action (2 min)
            </PlayButton>
        </ImageContainer>
        <FeaturesContainer>
            { 
                features.map(({ id, icon, title, description}) => 
                <FeatureIcon 
                    key={id} 
                    icon={icon}  
                    title={title} 
                    description={description} 
                />)
            }
        </FeaturesContainer>
        <Divider />
    </Section>
  )
}
