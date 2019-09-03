import React from 'react'; 
import './App.css';
import UserCard from './components/UserCard.js';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }
  
  componentDidMount() {  //runs on first render
    // axios
    //     .get ('https://api.github.com/users/epicenedev')
    //     .then (res => console.log('api returned: ', res ))
    //     .then (res => this.setState({ user: res.data }))
    //     .catch(err => console.log("api req error!", err));
    fetch('https://api.github.com/users/epicenedev')
      .then(res => res.json())
      .then(data => this.setState({ user: data }));

    fetch('https://api.github.com/users/epicenedev/followers')
      .then(res => res.json())
      .then(data => this.setState({ followers: data }))
  };

  componentDidUpdate() {   //runs everytime render except first
    console.log("CDU: ", this.state)
  }

  render() {
    return (
        <div className="user">
            <h1>Github Users</h1>
            <UserCard user={this.state.user} followers={this.state.followers} />
        </div>
    )
  };
}

export default App;
