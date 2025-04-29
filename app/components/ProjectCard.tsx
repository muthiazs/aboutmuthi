'use client'
import { Card } from 'antd'
import Link from 'next/link'

interface Project {
  title: string
  year: number
  slug: string
  image: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/project/${project.slug}`}>
      <Card
        hoverable
        cover={
          <img
            alt={project.title}
            src={project.image}
            style={{ objectFit: 'cover', height: '200px', width: '100%' }}
          />
        }        
        className="max-w-[300px] bg-white rounded-md shadow"
      >
        <Card.Meta title={project.title} description={project.year} />
      </Card>
    </Link>
  );
}
