import './App.css';
import { useState } from 'react';
import Drawer from './layout/Drawer';
import Navbar from './layout/Navbar';
import IntroSection from './components/IntroSection';
import QualificationsSection from './components/QualificationsSection';
import Contact from './components/Contact';
function App() {
  const [drawer, setDrawer] = useState(false);
  const drawerHandler = ()=>{
    setDrawer(prev => !prev);
  }
  console.log(drawer);
  return (
    <div className="App">
      <Navbar drawerHandler={drawerHandler}/>
      <Drawer drawer={drawer} drawerHandler={drawerHandler}/>
      <IntroSection/>
      <QualificationsSection/>
      <Contact/>
    </div>
  );
}

export default App;
