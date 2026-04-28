import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Studentlist from './Studentlist'

function App() {
  const [count, setCount] = useState(0)

  const students = [
    {name:'Rutuja',course: 'CSE',Marks:85},
    {name:'Priya',course: 'IT',Marks:90},
    {name:'Amruta',course: 'ETC',Marks:78},
  ];

  const showMessage = () => {
    alert("Button Clicked!");
  };
  return (
    <>
    <h1>Student List  </h1>
    <button onClick={showMessage}>Click Me</button>
    <Studentlist students={students} />
    </>
  );
}

export default App
