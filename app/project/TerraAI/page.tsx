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
        <h1 style={{ fontSize: '2rem', margin: '1rem 0', fontWeight: 'bold' }}>YouTube Video Summarizer</h1>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', background: '#EADCDC', padding: '2rem' }}>
          <img src="/assets/terraai2.png" alt="youtube summarizer" style={{ flex: 1, borderRadius: '8px' }} />
        </div>
        <br />

        <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>
          Back in my third semester, I took a bold step and applied for an internship project, even though I had little to no experience at the time. 
          I was nervous and unsure if I was ready, but looking back, it turned out to be one of the best decisions I’ve made.
          <br /><br />
          During the project, my team and I built a <strong>YouTube Video Summarizer</strong> application using the Smojo programming language. 
          Through this experience, I gained a lot especially in front-end development using HTML and CSS.
          <br /><br />
          More than that, I learned how to collaborate effectively in a remote work environment and improved my cross-cultural communication skills, 
          as our team came from different backgrounds and locations.
          <br /><br />
          This project taught me that you don’t have to wait until you’re “fully ready” to start. Sometimes, just having the courage to try is enough 
          to open up meaningful learning opportunities.
        </p>

        {/* Results */}
        <h2 style={{ marginTop: '3rem', fontSize: '1.2rem', fontWeight: 600 }}>Results</h2>
        <div style={{ backgroundColor: '#000', color: '#fff', padding: '2rem', borderRadius: '8px' }}>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem' }}>
            <li>✅ Developed using Smojo programming language</li>
            <li>✅ Strengthened front-end development skills with HTML & CSS</li>
            <li>✅ Improved remote teamwork and cross-cultural communication</li>
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
          2023 ・ Frontend Development ・ Remote Internship Project
        </div>
      </div>
    </div>
  )
}
