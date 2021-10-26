import './App.css';
import Logo from './svg/Logo'
import Header from './components/Header'
import BottomNav from './components/BottomNav';
import Contents from './components/Contents';
import { useState } from 'react';

function App() {
  let [inWidth,setWidth] = useState(window.innerWidth)

  let handleResize = () => {
    setWidth(window.innerWidth)
  }

  window.addEventListener('resize',handleResize)
  return (
    <div className="App">
      <Header />
      <Contents />
      {inWidth > 700 ? <></> : <BottomNav />}
    </div>
  );
}

export default App;
