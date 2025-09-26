import styles from './Home.module.css';
import { useNavigate } from 'react-router';
import HeroImage from '../assets/hero.png';
import { motion } from "framer-motion";

export default function Home() {
  const navigation = useNavigate();
  const navigateToQuestion = () => navigation('/Questionares');

  return (
    <main className={styles.container}>
      <section className={`${styles.header}`}>
        <div className={`${styles.blur} ${styles['hero-blur']}`}></div>
        <div className={styles.heroContent}>
          <p>
            Welcome to <strong className="stroke-text">Practice Solution</strong>, 
            a free platform built to help learners prepare for AWS certification exams. 
            Whether you're just starting or brushing up for your next badge, we provide 
            curated questions, clear explanations, and community support—all without 
            breaking the bank.
          </p>
          <button className={styles.ctaButton} onClick={navigateToQuestion}>
            🚀 Start the Questionnaire
          </button>
        </div>
         <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img 
            src={HeroImage} 
            alt="Hero" 
            loading="lazy" 
            style={{ maxWidth: '100%', height: 'auto' }} 
          />
        </motion.div>
      </section>

      <section className={styles.section}>
        <h2>Achievements</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>🌍 Global Reach</h3>
            <p>Helping learners from around the world study for AWS certifications without cost barriers.</p>
          </div>
          <div className={styles.card}>
            <h3>⭐ 100% Free</h3>
            <p>All practice questions and explanations are free—no hidden fees or premium tiers.</p>
          </div>
          <div className={styles.card}>
            <h3>👍 Student-Approved</h3>
            <p>Built based on community feedback and the real challenges learners face.</p>
          </div>
          <div className={styles.card}>
            <h3>🤝 Open Source</h3>
            <p>Community-contributed and transparent—anyone can improve the platform.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Our Goals</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>🎯 Practice with Purpose</h3>
            <p>Deliver question sets focused on real exam domains to maximize learning efficiency.</p>
          </div>
          <div className={styles.card}>
            <h3>🧠 Build Confidence</h3>
            <p>Help learners gain clarity on tricky AWS topics using simple explanations and diagrams.</p>
          </div>
          <div className={styles.card}>
            <h3>🌐 Foster Community</h3>
            <p>Encourage peer-to-peer learning and sharing through forums and GitHub contributions.</p>
          </div>
          <div className={styles.card}>
            <h3>📈 Keep Content Fresh</h3>
            <p>Update questions as AWS services evolve—so you're never outdated on the exam.</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>
          <span className={styles.highlight}>Together</span>, let's simplify AWS certification for everyone.
        </h2>
        <p>Ready to start your free AWS prep journey?</p>
        <button className={styles.ctaButton} onClick={navigateToQuestion}>
          Explore Questions
        </button>
      </section>
    </main>
  );
}

