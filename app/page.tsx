import Hero from '../app/components/hero'
import { Row, Col, Card } from 'antd'
import Link from 'next/link'
import Lanyard from '../app/components/lanyard/Lanyard'

const projects = [
  {
    title: 'SIMPEL FSM',
    slug: 'simpel-fsm',
    year: 2025,
    color: '#EADCDC',
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
    <main className="px-6 py-8">
          <Hero />
      {/* Project Section */}
      <section className="mt-12">
        <h2 className="text-xl font-bold mb-6">Project</h2>
        <Row gutter={[24, 24]}>
          {projects.map((project, idx) => (
            <Col xs={24} sm={12} lg={8} key={idx}>
              <Link href={`/project/${project.slug}`} style={{ textDecoration: 'none' }}>
                <Card
                  title={project.title}
                  variant='outlined'
                  style={{
                    background: project.color,
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                  }}
                  hoverable
                >
                  <div
                    style={{
                      background: '#fff',
                      height: '150px',
                      borderRadius: '4px',
                    }}
                  ></div>
                  <p style={{ marginTop: '1rem' }}>Enterprise – {project.year}</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </section>
    </main>
  );
}


