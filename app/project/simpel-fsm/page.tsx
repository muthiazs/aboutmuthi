'use client'

import Link from 'next/link'

export default function Project1Page() {
  return (
    <div style={{ backgroundColor: '#fff', color: '#000', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Back link */}
        <Link href="/" style={{ fontSize: '0.9rem', textDecoration: 'none', color: '#555' }}>
          ← BACK TO HOME
        </Link>

        {/* Title & Description */}
        <h1 style={{ fontSize: '2rem', margin: '1rem 0', fontWeight: 'bold' }}>SIMPEL-FSM</h1>
                {/* Before After */}
        {/* <h2 style={{ marginTop: '3rem', fontSize: '1.2rem', fontWeight: 600 }}>Before After</h2> */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', background: '#EADCDC', padding: '2rem' }}>
          <img src="/assets/SIMPEL-FSM.png" alt="simpel-fsm" style={{ flex: 1, borderRadius: '8px' }} />
          {/* <img src="/after.png" alt="After" style={{ flex: 1, borderRadius: '8px' }} /> */}
        </div>
        <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>
          During my fourth semester, while working part-time at my faculty's International Office, I noticed a significant issue: the administrative workload was increasing, and one of the most time-consuming processes was manually handling official travel requests.
          <br /><br />
          Rather than seeing it as just another task, I saw it as an opportunity to create change.
          In my fifth semester, I took the initiative to develop SIMPEL-FSM (Sistem Informasi Perjalanan Dinas Luar Negeri)—a web-based application specifically designed to automate the process of submitting and managing international official travel requests at the Faculty of Science and Mathematics, Diponegoro University.
          <br /><br />
          With SIMPEL-FSM, applicants can input their information, upload required documents, track the approval process, and download signed files—all through one integrated platform. On the administrative side, the system enables staff to manage users, verify and approve requests, upload dean-signed documents, and monitor request analytics through a dedicated dashboard.
          <br /><br />
          This project was more than a technical achievement—it was a response to a real need. SIMPEL-FSM helped reduce bottlenecks, improved transparency, and saved significant time for both staff and applicants.
          <br /><br />
          It became a testament to how technology can solve specific, real-world problems—and how taking initiative, even as a student, can lead to meaningful impact.
        </p>


        {/* Results */}
        <h2 style={{ marginTop: '3rem', fontSize: '1.2rem', fontWeight: 600 }}>Results</h2>
        <div style={{ backgroundColor: '#000', color: '#fff', padding: '2rem', borderRadius: '8px' }}>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem' }}>
            <li>✅ Reduced processing time for international travel requests</li>
            <li>✅ Improved transparency and tracking for both applicants and administrators</li>
            <li>✅ Streamlined document management and approval flow</li>
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
          2025 ・ UI/UX Design ・ Fullstack Developer
        </div>
      </div>
    </div>
  )
}
