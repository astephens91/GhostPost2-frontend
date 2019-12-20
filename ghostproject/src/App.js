import React, { Component } from 'react';
import PostList from './components/PostList'
import Form from './components/Form'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";


class App extends Component {
    state = {
      ghostposts: [],
      input: "",
      boast: ""
    }
  componentDidMount(){
    fetch('http://localhost:8000/post/')
    .then(results =>{
        return results.json();  
    }).then(data => {
        console.log(data)
        this.setState({ghostposts: data})
        console.log("state", this.state.ghostposts)
    })
}

  handleChange = event => {
    this.setState({ input: event.target.value})
  };
  


  render() {
    console.log(this.state)
    return (
      <Router>
        <section className="ghostpostapp">
          <header className="header">
            <h1>Ghostpost</h1>
            <Form />
            <br />
          </header>


        <Switch>
            <Route
              exact
              path="/all"
              render={() => (
                <PostList
                  ghostposts={this.state.ghostposts}
                />
              )}
             />

             <Route
              exact
              path="/boasts"
              render={() => (
                <PostList
                  ghostposts={this.state.ghostposts.filter(
                    posts => posts.is_boast === true
                  )}
                />
              )}
            />

            <Route 
              exact
              path="/roasts"
              render={() => (
                <PostList
                  ghostposts={this.state.ghostposts.filter(
                    posts => posts.is_boast === false
                  )}
                />
              )}
            />
            <Route path="/downvoted" render={() => (
              <PostList ghostposts={this.state.ghostposts.sort((a, b) => {
                return a.net_votes - b.net_votes
                  })} />
                )}>
            </Route>

            <Route path="/upvoted" render={() => (
              <PostList ghostposts={this.state.ghostposts.sort((a, b) => {
                return b.net_votes - a.net_votes
                  })} />
                )}>
            </Route>
        </Switch>
          <footer className="footer">
            <ul className="filters">
              <li>
                <NavLink exact to="/all"
                activeClassName="selected">
                  ALL
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/boasts"
                activeClassName="selected">
                  ALL BOASTS
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/roasts"
                activeClassName="selected">
                  ALL ROASTS
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/downvoted"
                activeClassName="selected">
                  MOST HATED
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/upvoted"
                activeClassName="selected">
                  MOST LOVED
                </NavLink>
              </li>
            </ul>
          </footer>
        </section>
      </Router>
        
      
    )
  }
}

export default App;
