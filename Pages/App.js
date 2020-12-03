import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from '../Components/Menu';
import MappedFeed from '../Components/MappedFeed';
import AddPost from '../Components/AddPost';
import ProfileOptions from '../Components/ProfileOptions';

function App() {
  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/" exact><MappedFeed /></Route>
        <Route path="/add" exact><AddPost/></Route>
        <Route path="/options"><ProfileOptions/></Route>
      </Switch>

    </div>
  )
}

export default App
