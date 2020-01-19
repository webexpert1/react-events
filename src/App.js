import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventDashboard from './features/event/EventDashboard/EventDashboard';
import NavBar from './features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <React.Fragment>
       <NavBar />
       <Container>
         <EventDashboard/>
       </Container>
     
    </React.Fragment>
  );
}

export default App;
