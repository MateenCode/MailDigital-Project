import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="homePage">



      <div className="container">

      <div className="jumbotron">


        <h2 className="animated rotateIn">Mail Digital</h2>
        <img className="mailIcon" src="http://pngimg.com/uploads/envelope/envelope_PNG18382.png" />
        <form action="/action_page.php">
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
          </div>
          <div className="form-group">
            <label for="pwd">Password</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
          </div>
          <button type="submit" className="btn btn-info">Login</button>
          <button type="submit" className="btn btn-success" id="signUpBtn">Sign Up</button>
        </form>

        </div>



      </div>





      </div>
    );
  }
}

export default App;
