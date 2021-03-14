import './assets/styles/index.css'
import Nav from './components/Nav'
import Contents from './components/Contents'
import Timeline from './components/Timeline'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/Polls'>
            <Contents />
          </Route>
          <Route path='*'>
          </Route>
        </Switch>
      </Router>
      <Timeline />
    </div>
  );
}

export default App;
