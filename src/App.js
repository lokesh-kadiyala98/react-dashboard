import { Route, Switch, Redirect } from 'react-router';

import withDashboard from './views/Dashboard';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Friends from './components/Friends';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

import './App.scss';

const enhancedHome = withDashboard(Home)
const enhancedGallery = withDashboard(Gallery)
const enhancedFriends = withDashboard(Friends)
const enhancedProfile = withDashboard(Profile)
const enhancedNotFound = withDashboard(NotFound)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/not-found" component={enhancedNotFound} />
        <Route path="/profile" component={enhancedProfile} />
        <Route path="/friends" component={enhancedFriends} />
        <Route path="/gallery" component={enhancedGallery} />
        <Route exact path="/" component={enhancedHome} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
