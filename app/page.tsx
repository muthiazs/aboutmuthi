import Hero from '../app/components/hero'
import { Row, Col, Card } from 'antd'
import Link from 'next/link'
import Lanyard from '../app/components/lanyard/Lanyard'
import PhotoCarousel from './components/photoCarousel'

const projects = [
  {
    title: 'SIMPEL FSM',
    slug: 'simpel-fsm',
    year: 2025,
    color: '#EADCDC',
    image: '/assets/SIMPEL-FSM.png',
  },
  {
    title: 'SIP-IRS',
    slug: 'sip-irs',
    year: 2024,
    color: '#C6C6C6',
  },
  {
    title: 'Project Name',
    slug: 'project-name',
    year: 2019,
    color: '#705B52',
  },
  // Add more projects as needed
]

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-6">
      <header className="mb-6">
        <nav className="flex items-center">
        <div className="bg-pink-100 border border-pink-500 text-pink-700 font-bold rounded-lg p-2">
          🎀@devgurlll💗
        </div>
          <div className="ml-auto flex space-x-4">
            {/* <Link href="/about-me" className="text-gray-500 hover:text-gray-700">About me</Link> */}
            <Link href="/experience" className="text-gray-500 hover:text-gray-700">Experience</Link>
            <Link href="/project" className="text-gray-500 hover:text-gray-700">Project</Link>
          </div>
        </nav>
      </header>

      <Hero />

      {/* Experience Section
      <section className="mt-12">
        <h2 className="text-xl font-bold mb-6">Experience</h2>
        <PhotoCarousel />
      </section> */}


      {/* Project Section */}
      <section className="mt-12">
        <h2 className="text-xl font-bold mb-6">Project</h2>
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


