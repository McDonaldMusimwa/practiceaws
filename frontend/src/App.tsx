
import './App.css'

import HomeCard from './combonents/UI/HomeCard';


function App() {
  return (
    <>
      {/*<Header />*/}
 <span className="hero">Choose a quick test to under take or create an account and log in for more for domain specific questions.</span>

      <div className="homehero">
        <HomeCard route="/SAA-C03">Solutions Architect</HomeCard>
        <HomeCard route="/CP-C03">Cloud Practitioner</HomeCard>
        <HomeCard route="/AIP">AI Practitioner</HomeCard>
      </div>
     
    </>
  )
}

export default App
