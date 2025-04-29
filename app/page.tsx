import Hero from '../app/components/hero'
import { Row, Col, Card } from 'antd'
import Link from 'next/link'
import Lanyard from '../app/components/lanyard/Lanyard'
import PhotoCarousel from './components/photoCarousel'
import Stack from './components/stack/stack'
import Navigation from './components/nav'
import Footer from './components/footer'


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
      <Navigation />
      <Hero />
      <Footer/>
    </main>
  );
}


