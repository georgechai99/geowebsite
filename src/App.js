import './App.css';
import ProjectGrid from './components/projectGrid';
import selfie from './images/selfie.png';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from './components/experience';
import Navigation from './components/navigation';
import Footer from './components/footer';

function App() {
  return (
    <div className="App mb-5 pb-5">
      <Navigation />
    <header className="intro">
      <div class="topSection">
        <div class="circle">
          <img className="selfie" src={selfie} alt="just me" />
        </div>
    <div className="words">
      <h1 class="title">Hi! I'm George.</h1>
      <h1 class="title">Aspiring Entrepreneur and Product Manager.</h1>
      <p class="subtitle">
      Incoming @ <a class="link" href="https://www.sofi.com"><strong class="sofi">Sofi</strong></a>, Previously @ <a class="link" href="https://www.salesforce.com"><strong class="salesforce">Salesforce</strong></a>, <a class="link" href="https://www.equityzen.com"><strong class="equityzen">EquityZen</strong></a>.
      </p>
      </div>
      </div>
    </header>
    <h3 class="heading">Experience</h3>
    <div>
    <Experience />
    
    
    </div>
    <br></br>
    <Footer />
 
    </div>
  );
}

export default App;
