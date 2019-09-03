import React from 'react'; 
import './App.css';
import User from './components/User.js';
import axios from 'axios';

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
        .get ('https://api.github.com/users/epicenedev')
        .then (res => console.log('api returned: ', res))
        .catch(err => console.log("api req error!", err));
  };

  render() {
    return (
        <div className="user">
            <h1>Github Users</h1>
            <User />
        </div>
    )
  };
}

export default App;
