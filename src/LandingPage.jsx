import React from 'react';
import styles from './LandingPage.module.css';

const LandingPage = () => (
  <div className={styles.landingContainer}>
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Yonderly</h1>
        <h2 className={styles.tagline}>Chat with Videos for Tutorial Steps</h2>
        <p className={styles.description}>
          Chat with videos to deliver insight, request summaries with <span className={styles.ai}>Yonderly AI</span>.
        </p>
        <button className={styles.cta}>Get Started</button>
      </div>
      <div className={styles.heroImage}>
        <img src="https://assets-global.website-files.com/63e4b3e6e7b7e2b1c6e2e2e2/63e4b3e6e7b7e2b1c6e2e2e3_hero-illustration.svg" alt="Yonderly Hero" className={styles.heroImgTag} />
      </div>
    </header>
    <section className={styles.features}>
      <div className={styles.featureCard}>
        <h3>Chat with Videos</h3>
        <p>Interact with tutorial videos and ask questions in real time.</p>
      </div>
      <div className={styles.featureCard}>
        <h3>AI-Powered Summaries</h3>
        <p>Request instant summaries and insights from Yonderly AI.</p>
      </div>
      <div className={styles.featureCard}>
        <h3>Step-by-Step Guidance</h3>
        <p>Follow clear, actionable steps for any tutorial.</p>
      </div>
    </section>
    <section className={styles.testimonials}>
      <h2>What Users Say</h2>
      <div className={styles.testimonialCards}>
        <div className={styles.testimonialCard}>
          <p>"Yonderly made learning so much easier. I love chatting with videos!"</p>
          <span>- Alex, Student</span>
        </div>
        <div className={styles.testimonialCard}>
          <p>"The AI summaries save me hours every week. Highly recommended!"</p>
          <span>- Jamie, Developer</span>
        </div>
        <div className={styles.testimonialCard}>
          <p>"Step-by-step video guidance is a game changer for tutorials."</p>
          <span>- Morgan, Designer</span>
        </div>
      </div>
    </section>
    <section className={styles.pricing}>
      <h2>Pricing that scales with your business</h2>
      <div className={styles.pricingCards}>
        <div className={styles.pricingCard}>
          <h3>Starter</h3>
          <p className={styles.price}>$79<span>/year</span></p>
          <ul>
            <li>1 user</li>
            <li>All core features</li>
            <li>Email support</li>
          </ul>
          <button className={styles.cta}>Purchase</button>
        </div>
        <div className={styles.pricingCard}>
          <h3>Pro</h3>
          <p className={styles.price}>$149<span>/year</span></p>
          <ul>
            <li>5 users</li>
            <li>All core features</li>
            <li>Priority support</li>
          </ul>
          <button className={styles.cta}>Purchase</button>
        </div>
        <div className={styles.pricingCard}>
          <h3>Agency</h3>
          <p className={styles.price}>$299<span>/year</span></p>
          <ul>
            <li>100 users</li>
            <li>All core features</li>
            <li>Dedicated support</li>
          </ul>
          <button className={styles.cta}>Purchase</button>
        </div>
      </div>
    </section>
    <footer className={styles.footer}>
      <div>© {new Date().getFullYear()} Yonderly. All rights reserved.</div>
      <div>
        <a href="#features">Features</a> | <a href="#pricing">Pricing</a> | <a href="#">Contact</a>
      </div>
    </footer>
  </div>
);

export default LandingPage; 