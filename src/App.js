import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import NavBar from './Component/NavBar';
import Projects from './Component/Projects.jsx'
import Project from './Component/Project';
import Education from './Component/Education';
import  {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        {/* je component chnage krayche te routes chya aat */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects/>}/>
          
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
