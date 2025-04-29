// components/PhotoCarousel.tsx
import { Carousel, Card, Typography } from 'antd';

const { Text } = Typography;

interface PhotoCarouselItem {
  imageUrl: string;
  caption: string;
}

interface PhotoCarouselProps {
  items: PhotoCarouselItem[];
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ items }) => {
  return (
    <Card
      style={{
        width: '100%',
        borderRadius: '8px',
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: '#EADCDC', // pink muda
      }}
      bodyStyle={{ padding: 0 }}
    >
      <Carousel autoplay dots>
        {items.map((item, index) => (
          <div key={index}>
            <img
              src={item.imageUrl}
              alt={item.caption}
              style={{
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                width: '100%',
                height: '300px',
                objectFit: 'cover',
              }}
            />
            <div style={{ padding: '1rem' }}>
              <Text strong style={{ color: '#444' }}>
                {item.caption}
              </Text>
            </div>
          </div>
        ))}
      </Carousel>
    </Card>
  );
};

export default PhotoCarousel;
