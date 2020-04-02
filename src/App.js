import React from 'react';
import Contact from './components/Contact'
import ContactList from './components/ContactList'
import './App.css';

//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="App">
     
     <Contact
     name='JoJo'
     avatar='https://randomuser.me/api/portraits/lego/1.jpg'
     online/>
    
      <Contact
     name='Jeff'
     avatar='https://randomuser.me/api/portraits/lego/5.jpg'
     online/>
    
      <Contact
     name='Olly'
     avatar='https://randomuser.me/api/portraits/lego/4.jpg'
    /> 
   
    <ContactList/>
    </div>
  );
}

export default App;
