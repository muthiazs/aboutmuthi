// components/ExperienceCard.tsx
import { Card, Typography } from 'antd';

const { Title } = Typography;

interface ExperienceCardProps {
  title: string;
  role: string;
  duration: string;
  description: string;
  imageUrl: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, role, duration, description, imageUrl }) => {
  return (
    <Card hoverable style={{ width: '100%', borderRadius: '8px', textAlign: 'center', padding: '1rem', backgroundColor: '#EDDFE0' }}>
      <img src={imageUrl} alt={title} style={{ borderRadius: '8px', width: '100%', height: '200px', objectFit: 'cover' }} />
      <Title level={4} style={{ marginTop: '1rem' }}>{title}</Title>
      <p style={{ fontWeight: 'bold', color: '#444' }}>{role}</p>
      <p>{duration}</p>
      <p>{description}</p>
    </Card>
  );
};

export default ExperienceCard;
