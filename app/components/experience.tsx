import React from 'react';
import { Carousel, Card, Typography } from 'antd';

const { Title, Text, Paragraph } = Typography;

// Sample experience data
const experienceData = [
  {
    id: 1,
    title: "Web Developer Intern",
    company: "Tech Solutions Inc.",
    period: "June 2023 - August 2023",
    description: "Developed responsive web applications using React.js and collaborated with senior developers on client projects. Implemented UI components and integrated APIs.",
    skills: ["React.js", "JavaScript", "CSS", "RESTful APIs"]
  },
  {
    id: 2,
    title: "UI/UX Design Assistant",
    company: "Creative Studio",
    period: "January 2023 - May 2023",
    description: "Assisted in creating user interface designs for mobile applications. Conducted user research and contributed to improving user experience flows.",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"]
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Digital Innovations",
    period: "September 2022 - December 2022",
    description: "Implemented frontend solutions for e-commerce platforms. Optimized website performance and collaborated with backend developers.",
    skills: ["HTML5", "CSS3", "JavaScript", "Vue.js"]
  }
];

const ExperienceCarousel = () => {
  // Custom styles for the carousel arrows
  const carouselStyle = {
    '.ant-carousel .slick-prev, .ant-carousel .slick-next': {
      color: '#000',
      fontSize: '24px',
      zIndex: 2
    },
    '.ant-carousel .slick-prev': {
      left: '10px'
    },
    '.ant-carousel .slick-next': {
      right: '10px'
    }
  };

  return (

      <Carousel 
        arrows 
        infinite={false}
        slidesToShow={2}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]}
      >
        {experienceData.map((exp) => (
          <div key={exp.id} className="px-2">
            <Card
              hoverable
              style={{ height: 300, margin: '0 8px' }}
              
            >
              <Title level={4}>{exp.title}</Title>
              <Text type="secondary" strong>{exp.company}</Text>
              <Paragraph type="secondary" style={{ marginTop: 4 }}>{exp.period}</Paragraph>
              <Paragraph style={{ marginTop: 16 }}>{exp.description}</Paragraph>
              <div className="mt-4">
                <Text strong>Skills:</Text>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </Carousel>
);
}

export default ExperienceCarousel;