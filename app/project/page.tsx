
import { Row, Col, Card } from 'antd'
import Link from 'next/link'
import Navigation from '../components/nav';

const projects = [
  {
    title: 'SIMPEL FSM',
    slug: 'simpel-fsm',
    year: 2025,
    color: '#EADCDC',
    image: '/assets/simpel2.png',
  },
  {
    title: 'SIP-IRS',
    slug: 'sip-irs',
    year: 2024,
    color: '#C6C6C6',
    image: '/assets/sipirs2.png',
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
     <Navigation/>
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


