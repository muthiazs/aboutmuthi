'use client'

import Link from 'next/link'

export default function Project3Page() {
  return (
    <div style={{ backgroundColor: '#fff', color: '#000', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Back link */}
        <Link href="/project" style={{ fontSize: '0.9rem', textDecoration: 'none', color: '#555' }}>
          ← BACK TO PROJECT LIST
        </Link>

        {/* Title & Description */}
        <h1 style={{ fontSize: '2rem', margin: '1rem 0', fontWeight: 'bold' }}>ScholarLink – Find Scholarships That Fit You</h1>

        {/* Embedded YouTube Video */}
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginTop: '1rem', borderRadius: '8px' }}>
          <iframe
            src="https://www.youtube.com/embed/8-wS2FfOx7w"
            title="ScholarLink Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px' }}
          ></iframe>
        </div>
        <br />

        <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>
          In 2024, I joined a hackathon called <strong>Hackfest</strong> with a few friends, where we developed a mobile application called <strong>ScholarLink</strong>.
          <br /><br />
          ScholarLink helps students discover scholarship opportunities that align with their interests and potential. Inspired by the concept of a job fair, we envisioned a centralized platform where students can search, explore, and access verified scholarship information all in one place.
          <br /><br />
          As the frontend developer, I was responsible for designing and building the user interface using Flutter. We focused on creating a clean, student-friendly experience that simplifies the entire scholarship discovery journey.
          <br /><br />
          This project was not only a great hands-on opportunity to improve my Flutter skills, but also a meaningful attempt to help students reach their educational dreams more easily.
        </p>

        {/* Results */}
        <h2 style={{ marginTop: '3rem', fontSize: '1.2rem', fontWeight: 600 }}>Results</h2>
        <div style={{ backgroundColor: '#000', color: '#fff', padding: '2rem', borderRadius: '8px' }}>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem' }}>
            <li>✅ Developed using Flutter for mobile platforms</li>
            <li>✅ Focused on personalized scholarship recommendations</li>
            <li>✅ Designed intuitive and accessible UI for students</li>
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
          <Link href="/project/project4" style={{ textDecoration: 'none', color: '#333' }}>
            Next Project →
          </Link>
        </div>

        {/* Footer Info */}
        <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: '#777' }}>
          2024 ・ Frontend Development ・ Hackfest Mobile App Project
        </div>
      </div>
    </div>
  )
}
