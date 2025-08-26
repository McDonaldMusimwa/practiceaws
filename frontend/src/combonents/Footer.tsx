import styles from './Footer.module.css';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router';

function Footer() {
 
  const currentYear = new Date().getFullYear();
  const githubLink = "https://github.com/McDonaldMusimwa/practiceaws.git";
  const examLink = "https://aws.amazon.com/certification/certified-solutions-architect-associate/";
 

  return (
    <footer className={styles.footer}>
      <p>
        &copy; {currentYear} AWS Practice Solution App.  
        Built with 💻 to help learners succeed.
      </p>
      <p className={styles.links}>
      <Link 
  to={examLink}  
  target="_blank" 
  rel="noopener noreferrer"
>
  Learn about the SAA-C03 Exam
</Link>
        <Link to={githubLink}   target="_blank" 
  rel="noopener noreferrer">
          <FaGithub />
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
