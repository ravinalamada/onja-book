import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from '../Components/Menu';
import Feed from '../Components/Feed';
import AddPost from '../Components/AddPost';
import ProfileOptions from '../Components/ProfileOptions';

function App() {
  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/" exact><Feed /></Route>
        <Route path="/add" exact><AddPost/></Route>
        <Route path="/options"><ProfileOptions/></Route>
      </Switch>

    </div>
  )
}

export default App
