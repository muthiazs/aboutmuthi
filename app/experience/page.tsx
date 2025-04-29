'use client';
import React from 'react';
import { Collapse, Image, Divider } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import Navigation from '../components/nav';
import { main } from 'framer-motion/client';

const { Panel } = Collapse;

const experiences = [
  {
    title: '🎓 Head of Scholarship & Career - BEM FSM UNDIP',
    date: 'Jan 2024 - Dec 2024',
    description: `I led 4 impactful programs such as SC Day, SC Talk, Kesatria Mandala, and Info SC to help students grow in scholarships and careers.`,
    image: '/assets/bem.jpg',
  },
  {
    title: '🎨 UI/UX Mentor - I-RICH UNDIP',
    date: 'Apr 2024 - Dec 2024',
    description: `Mentored UI/UX class for designing POS system. Taught wireframing, prototyping, and guided students on UX flow.`,
    image: '/assets/irich.jpg',
  },
  {
    title: '🌍 Assistant - International Office FSM UNDIP',
    date: 'Feb 2024 - Present',
    description: `Handled reporting, collaboration documents, annual reviews, and data processing.`,
    image: '/assets/io.jpg',
  },
  {
    title: '👩🏻‍🏫 Practicum Assistant - Database',
    date: 'Sep 2024 - Dec 2024',
    description: `Guided 25+ students weekly using MySQL, Data Modeler, and business case-based learning.`,
    image: '/assets/practicum.jpg',
  },
  {
    title: '🌐 Smojo Developer Intern - Terra AI Singapore',
    date: 'Sep 2023 - Mar 2024',
    description: `Created YouTube summarizer app using Smojo. Learned frontend HTML/CSS and async teamwork.`,
    image: '/assets/terra.jpg',
  },
  {
    title: '🤖 AI for Learning Training - SMPN 21',
    date: 'May 2024',
    description: `Created & delivered AI modules to train middle school teachers on edtech integration.`,
    image: '/assets/ai-training.jpg',
  },
  {
    title: '🛡️ Digital Safety Awareness - SMPN 21',
    date: 'May 2024',
    description: `Taught students about online safety, data privacy, and recognizing harmful behavior.`,
    image: '/assets/digital-safety.jpg',
  },
];

export default function ExperiencePage() {
  return (
    <main className="container mx-auto px-4 py-6">
    <Navigation />
    <div className="min-h-screen bg-pink-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-pink-700 text-center mb-8">My Experience 💼</h1>
      <Collapse
        accordion
        bordered={false}
        defaultActiveKey={['0']}
        expandIconPosition="right"
        style={{ backgroundColor: 'transparent' }}
      >
        {experiences.map((exp, idx) => (
          <Panel
            header={
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="text-lg font-semibold text-pink-800">{exp.title}</span>
                <span className="text-sm text-pink-500">{exp.date}</span>
              </div>
            }
            key={idx}
            style={{ backgroundColor: 'white', borderRadius: 12, marginBottom: 10 }}
          >
            <p className="text-gray-700">{exp.description}</p>
            <div className="mt-4">
              <Image
                src={exp.image}
                alt={exp.title}
                width={300}
                height={200}
                className="rounded-xl"
                placeholder
              />
            </div>
          </Panel>
        ))}
      </Collapse>
      <Divider />
      <p className="text-center text-pink-600 font-medium mt-8">
        Thank you for scrolling my pink-ified journey 💗🌸 — With love, Muthia 💌
      </p>
    </div>
    </main>
  );
}
