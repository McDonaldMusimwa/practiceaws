import "./App.css";
import { FaCloud, FaServer, FaRobot } from "react-icons/fa";
import HomeCard from "./combonents/UI/HomeCard";

function App() {
  const exams = [
    { name: "Solutions Architect", route: "SAA-C03", icon: <FaServer /> },
    { name: "Cloud Practitioner", route: "CP-C03", icon: <FaCloud /> },
    { name: "AI Practitioner", route: "AIP", icon: <FaRobot /> },
  ];

  return (
    <>
      <section className="hero">
        <h1 className="heroTitle">Welcome to Practice Solution</h1>
        <p className="heroSubtitle">
          Choose a quick test to get started, or{" "}
          <span className="highlight">create an account</span> for more domain-specific practice questions.
        </p>
      </section>

      <div className="homehero">
        {exams.map((exam) => (
          <HomeCard route={"/" + exam.route} key={exam.name}>
            <div className="cardContent">
              <span className="cardIcon">{exam.icon}</span>
              {exam.name}
            </div>
          </HomeCard>
        ))}
      </div>
    </>
  );
}

export default App;
