
import { Row, Col, Card } from 'antd'
import Link from 'next/link'
import Navigation from '../components/nav';
import { image } from 'framer-motion/client';

const projects = [
  {
    title: 'SIMPEL FSM',
    slug: 'simpel-fsm',
    year: 2025,
    color: '#E6A4B4',
    image: '/assets/simpel2.png',
  },
  {
    title: 'KarirYuk',
    slug: 'kariryuk',
    year: 2025,
    color: '#F3D7CA',
    image: '/assets/kariryuk1.png',
  },
  {
    title: 'SIP-IRS',
    slug: 'sip-irs',
    year: 2024,
    color: '#F5EEE6',
    image: '/assets/sipirs2.png',
  },
  // Add more projects as needed
  {
    title: 'SISYANDU',
    slug: 'sisyandu',
    year: 2024,
    color: '#FFF8E3',
    image: '/assets/sisyandu.png',
  },
  {
    title: 'ScholarLink',
    slug: 'scholarlink',
    year: 2024,
    color: '#F5EEE6',
    image: '/assets/scholarlink.png',
  },
   {
    title: 'Youtube Summarizer-TerraAI',
    slug: 'TerraAI',
    year: 2023,
    color: '#F3D7CA',
    image: '/assets/terraai2.png',
  },

]

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-6">
    <title>project-gallery💗</title>
     <Navigation/>
      {/* Project Section */}
      <section className="mt-12">
       {/* Cute Intro Box */}
        <div className="bg-pink-100 text-center text-gray-800 p-8 rounded-xl font-sans mb-10">
          <h1 className="text-2xl font-bold text-pink-600 mb-2">
            Welcome to My Project Gallery! 💖
          </h1>
          <p className="text-lg mb-1">
            These projects are a part of my journey—messy, magical, and full of learning moments 🌸💻
          </p>
          <p className="text-lg">
            Take a peek around—each project has its own story and sparkle ✨
          </p>
        </div>

        <Row gutter={[24, 24]}>
          {projects.map((project, idx) => (
            <Col xs={24} sm={12} lg={8} key={idx}>
              <Link href={`/project/${project.slug}`} style={{ textDecoration: 'none' }}>
              <Card
                title={project.title}
                variant="outlined"
                style={{
                  background: project.color,
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}
                hoverable
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                  }}
                />
                <p style={{ marginTop: '1rem' }}> {project.year}</p>
              </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </section>

    </main>
  );
}


