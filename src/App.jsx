import './App.css'
import { Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Squares from './components/Squares'

function App() {
  return (
    <div className="App">
      <Route path='/' component={Header}/>
      <Route exact path='/' component={Home}/>
      <div className='body'>
          <Route path='/squares' component={Squares}/>
      </div>
    </div>
  )
}

export default App;
