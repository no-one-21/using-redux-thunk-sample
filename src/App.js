import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllUsers } from './actions/users.actions'
import Header from './header'


class App extends Component {

 

   componentDidMount() {
    this.props.getAllUsers()
  }

 

  render() {
    
    let usersList = this.props.users.map(user => 
      <li key={user.id}>{user.name}</li>)
    return (
      <div className="App">
        <Header />
        <h2>List of users</h2>
        <ul>{usersList}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: bindActionCreators(getAllUsers, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
