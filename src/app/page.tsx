'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import StaggeredText from '@/components/StaggeredText';
import { findTeamByUid, getProblemStatement, TeamData, ProblemStatement } from '@/data/teamData';

export default function Home() {
  const [uid, setUid] = useState('');
  const [result, setResult] = useState<{ team: TeamData; problem: ProblemStatement } | null>(null);
  const [error, setError] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResult(null);
    setShowResult(false);

    const team = findTeamByUid(uid);
    if (!team) {
      setError('No team found for this UID. Please check and try again.');
      return;
    }

    const problem = getProblemStatement(team.domain);
    if (!problem) {
      setError('Problem statement not found for the assigned domain.');
      return;
    }

    setResult({ team, problem });
    setShowResult(true);
  };

  const handleClose = () => {
    setShowResult(false);
    setResult(null);
    setUid('');
    setError('');
  };

  return (
    <main className="hero-section">
      <div className="hero-overlay"></div>
      
      {/* Background Decorations */}
      <div className="decoration-dots dots-top-left"></div>
      <div className="decoration-dots dots-bottom-right"></div>
      <div className="decoration-circles circle-1"></div>
      <div className="decoration-circles circle-2"></div>
      <div className="decoration-circles circle-3"></div>

      <div className="hero-content">
        <nav className="navbar">
          <div className="nav-logos">
            <Image src="/logos/rice_group_logo.webp" alt="RICE Group Logo" width={80} height={40} className="nav-logo" />
            <Image src="/logos/logo.webp" alt="Partner Logo" width={100} height={40} className="nav-logo" />
          </div>
        </nav>

        <div className="main-content">
          <div className="title-container">
            <h1 className="main-title">
              <StaggeredText text="VIBEFORGE 1.0" />
            </h1>
            <p className="subtitle">12-Hrs Vibe Coding Hackathon</p>
          </div>

          <div className="organizer-info">
            <p className="organizer-title">Organized by GameLiminals</p>
            <p className="organizer-subtitle">(In Association with CYCODERS Club & Dept. of CSE)</p>
          </div>

          <form className="search-container" onSubmit={handleSearch}>
            <input
              type="text"
              name="uid"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
              placeholder="Enter Leader's UID"
              className="uid-input"
              required
            />
            <button type="submit" className="cta-button search-btn">
              Get Problem Statements
            </button>
          </form>

          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="footer-info">
          <p>In collaboration with Institution&apos;s Innovation Council, Adamas University</p>
          <p className="developer-credit" style={{ marginTop: '0.5rem' }}>
            Webpage developed by{' '}
            <a 
              href="https://sayandeep0212.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="developer-link"
              style={{ textDecoration: 'underline', fontWeight: 'bold' }}
            >
              Sayandeep Pradhan
            </a>
          </p>
        </div>
      </div>

      {/* Result Modal */}
      {showResult && result && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleClose}>&times;</button>
            
            <div className="team-header">
              <h2 className="team-name">{result.team.teamName}</h2>
              <span className="team-domain">{result.team.domain}</span>
            </div>

            <div className="problem-content">
              <h3 className="problem-title">{result.problem.title}</h3>
              <div className="problem-text">
                {result.problem.content.split('\n').map((line, i) => (
                  <p key={i} className={
                    line.startsWith('•') ? 'bullet-point' :
                    /^\d+\.\s/.test(line) && !line.startsWith('1. Domain') ? 'section-heading' :
                    line === 'Problem Statement' || line === 'Test Scenario (Example)' || line === 'Example:' || line === 'Expected result:' || line === 'Expected system behavior:' || line.startsWith('Possible reactions:') ? 'section-heading' :
                    ''
                  }>
                    {line || '\u00A0'}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
