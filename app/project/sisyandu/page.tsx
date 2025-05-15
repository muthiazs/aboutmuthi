'use client'

import Link from 'next/link'

export default function Project2Page() {
  return (
    <div style={{ backgroundColor: '#fff', color: '#000', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Back link */}
        <Link href="/project" style={{ fontSize: '0.9rem', textDecoration: 'none', color: '#555' }}>
          ← BACK TO PROJECT LIST
        </Link>

        {/* Title & Description */}
        <h1 style={{ fontSize: '2rem', margin: '1rem 0', fontWeight: 'bold' }}>SISYANDU – Posyandu Digital, Solusi Anda</h1>

        {/* Embedded YouTube Video */}
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginTop: '1rem', borderRadius: '8px' }}>
          <iframe
            src="https://www.youtube.com/embed/0qlb-VyvW2U"
            title="SISYANDU Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px' }}
          ></iframe>
        </div>
        <br />

        <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>
          During a national UI/UX design competition at GEMASTIK, my team and I designed <strong>SISYANDU</strong>, a digital solution for modernizing traditional <em>Posyandu</em> services in Indonesia.
          <br /><br />
          SISYANDU—short for <em>Posyandu Digital, Solusi Anda</em>—was built to help both community health workers and mothers with young children. Our goal was to create an accessible and trusted platform to replace manual child health monitoring books (KIA books) with a smarter, digital experience.
          <br /><br />
          The app includes features like digital child growth tracking, educational content vetted by health professionals, a real-time chat with local health workers, and integrated health questionnaires for early detection and intervention.
          <br /><br />
          This project not only enhanced our design thinking and prototyping skills but also deepened our understanding of how digital innovation can improve grassroots healthcare services across the country.
        </p>

        {/* Results */}
        <h2 style={{ marginTop: '3rem', fontSize: '1.2rem', fontWeight: 600 }}>Results</h2>
        <div style={{ backgroundColor: '#000', color: '#fff', padding: '2rem', borderRadius: '8px' }}>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem' }}>
            <li>✅ Designed for GEMASTIK UI/UX Design Competition</li>
            <li>✅ Aimed to support both mothers and health workers</li>
            <li>✅ Key features: digital growth tracker, chat, verified content, and questionnaires</li>
          </ul>
        </div>

        {/* Navigation */}
        <div style={{
          marginTop: '4rem',
          display: 'flex',
          justifyContent: 'space-between',
          background: '#f7f7f7',
          padding: '1.5rem',
          borderRadius: '8px',
        }}>
          <Link href="/project/project3" style={{ textDecoration: 'none', color: '#333' }}>
            Next Project →
          </Link>
        </div>

        {/* Footer Info */}
        <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: '#777' }}>
          2024 ・ UI/UX Design ・ National Competition (GEMASTIK)
        </div>
      </div>
    </div>
  )
}
