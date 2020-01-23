import React, { Component } from 'react'
import { Menu, Container, Button} from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';
import SignedOutMenu from './Menus/SignedOutMenu';
import SignedInMenu from './Menus/SignedInMenu';
class NavBar extends Component {
    state = {
      isAuthenticated: true
    }

    handleSignIn = () => {
      this.setState({isAuthenticated: true})
    }

    handleSignOut = () => {
      this.setState({
        isAuthenticated: false
      });
      this.props.history.push('/');
    }
    render() {
      const { isAuthenticated } = this.state;
        return (
            <div>
                      <Menu inverted fixed='top'>
                        <Container>
                          <Menu.Item exact as={NavLink} to='/' header>
                            <img src="/assets/logo.png" alt="logo" />
                            Re-vents
                          </Menu.Item>
                          <Menu.Item as={NavLink} to='/events' name="Events" />
                          <Menu.Item as={NavLink} to='/people' name="People" />
                          <Menu.Item as={NavLink} to='/test' name="Test" />
                          <Menu.Item>
                            <Button as={NavLink} to='/createEvent' floated="right" positive inverted content="Create Event" />
                          </Menu.Item>
                        {isAuthenticated ? <SignedInMenu signOut={this.handleSignOut} /> : <SignedOutMenu signIn={this.handleSignIn} />}
                      </Container>
                      </Menu>
            </div>
        )
    }
}

export default withRouter(NavBar)
