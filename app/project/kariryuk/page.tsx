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
        <h1 style={{ fontSize: '2rem', margin: '1rem 0', fontWeight: 'bold' }}>KarirYuk – Digital Job Fair Platform</h1>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', background: '#EADCDC', padding: '2rem' }}>
          <img src="/assets/kariryuk1.png" alt="kariryuk" style={{ flex: 1, borderRadius: '8px' }} />
        </div>
        <br />

        <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>
          During my sixth semester, I joined a team project to develop <strong>KarirYuk</strong>—a digital job fair platform designed to connect job seekers with companies more efficiently.
          The idea came from the growing demand for a centralized system where agencies could post internships or job openings and applicants could explore and apply with ease.
          <br /><br />
          With KarirYuk, companies can register, manage job listings, and track their approval status, while job seekers can browse opportunities and be redirected to official application pages.
          An admin dashboard was also built to verify listings, manage users, and monitor platform activity.
          <br /><br />
          This project strengthened my skills in fullstack development, user access control, and collaborative system design. More importantly, it showed how digital tools can simplify recruitment and create real-world impact.
        </p>

        {/* Results */}
        <h2 style={{ marginTop: '3rem', fontSize: '1.2rem', fontWeight: 600 }}>Results</h2>
        <div style={{ backgroundColor: '#000', color: '#fff', padding: '2rem', borderRadius: '8px' }}>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem' }}>
            <li>✅ Developed fullstack features for job posting and management</li>
            <li>✅ Implemented role-based access for companies, applicants, and admin</li>
            <li>✅ Improved understanding of real-world recruitment workflows</li>
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
          <Link href="/project/project2" style={{ textDecoration: 'none', color: '#333' }}>
            Next Project →
          </Link>
        </div>

        {/* Footer Info */}
        <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: '#777' }}>
          2024 ・ Fullstack Development ・ Job Fair Platform Project
        </div>
      </div>
    </div>
  )
}
