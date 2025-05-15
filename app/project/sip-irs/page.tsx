'use client'

import Link from 'next/link'

export default function Project1Page() {
  return (
    <div style={{ backgroundColor: '#fff', color: '#000', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Back link */}
        <Link href="/project" style={{ fontSize: '0.9rem', textDecoration: 'none', color: '#555' }}>
          ← BACK TO PROJECT LIST
        </Link>

        {/* Title & Description */}
        <h1 style={{ fontSize: '2rem', margin: '1rem 0', fontWeight: 'bold' }}>SIP-IRS</h1>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', background: '#EADCDC', padding: '2rem' }}>
          <img src="/assets/sipirs.png" alt="sip-irs" style={{ flex: 1, borderRadius: '8px' }} />
        </div>

        <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>
          SIP-IRS (Sistem Informasi Pengisian IRS) is an innovative web-based platform designed to simplify and organize the process of submitting and managing academic study plans for students and lecturers. It supports key academic roles such as academic advisors, program heads, and deans—making the start-of-semester process more efficient and structured.
          <br /><br />
          This project was developed during my fifth semester as part of a group assignment. It was also my first experience building a fullstack application from scratch. I took the role of Fullstack Developer, handling both frontend and backend development, and also acted as a project monitor to ensure smooth collaboration and steady progress throughout the development process.
          <br /><br />
          Through this project, I gained valuable insights into teamwork, project management, and technical problem-solving. It helped me understand how to build scalable web applications and how to manage tasks effectively in a collaborative team environment.
        </p>

        {/* Results */}
        <h2 style={{ marginTop: '3rem', fontSize: '1.2rem', fontWeight: 600 }}>Results</h2>
        <div style={{ backgroundColor: '#000', color: '#fff', padding: '2rem', borderRadius: '8px' }}>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem' }}>
            <li>✅ Successfully implemented fullstack architecture</li>
            <li>✅ Improved the efficiency of academic study plan submissions</li>
            <li>✅ Strengthened skills in frontend/backend development and team coordination</li>
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
          <Link href="/project/TerraAI" style={{ textDecoration: 'none', color: '#333' }}>
            Next Project →
          </Link>
        </div>

        {/* Footer Info */}
        <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: '#777' }}>
          2024 ・ UI/UX Design ・ Fullstack Developer ・ Project Monitor
        </div>
      </div>
    </div>
  )
}
