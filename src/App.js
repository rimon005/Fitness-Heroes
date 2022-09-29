
import './App.css';
import Home from './components/Home/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Nav from './components/Nav/Nav';
import Question from './components/Question/Question';

function App() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  } , [])
  return (
    <div>
      <Nav></Nav>
      <Home></Home>
      <Question></Question>
    </div>
  );
}
export default App;
