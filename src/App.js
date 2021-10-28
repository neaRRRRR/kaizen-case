import './App.css';
import Logo from './svg/Logo'
import Header from './components/Header'
import BottomNav from './components/BottomNav';
import Contents from './components/Contents';
import DetailPage from './components/DetailPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { useState } from 'react';

function App() {
  let [inWidth,setWidth] = useState(window.innerWidth)

  let handleResize = () => {
    setWidth(window.innerWidth)
  }

  const Main = () => {
    return(
      <>
      <Header />
      <Contents />
      {inWidth > 700 ? <></> : <BottomNav />}
      </>
    )
  }

  window.addEventListener('resize',handleResize)
  return (
    <div className="App">
    <Router>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/detail" component={DetailPage}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
