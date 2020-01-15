import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      navBarLinks: []
    }
  } 
  
  componentDidMount() {
    fetch('/api/navBarOptions') // TODO: where is the current path stored?
    .then(res => res.json())
    .then(navBarLinks => this.setState({navBarLinks},
      console.log('NavBar opts fetched..', navBarLinks)));
  }

  render() {
    return ( 
      <div className='links'>
        {this.state.navBarLinks.map(link => 
			    <a href={link.href} className='inLinks' key='link{link.id}'>
            {link.name}</a>
        )}
      </div>
    );
  }
}

export default NavBar;
