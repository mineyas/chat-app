import React from 'react';
import './Contact.css'
import PropTypes from 'prop-types';



function Contact (props) {

return <contact className='Contact'>
    
    <img class='avatar' src={props.avatar} alt={props.name}/>
    <div className='name'>
        <h3>{props.name}</h3>
    
      <div className='status'>
         <span className={props.online ? 'status-online' : 'status-offline'}></span>
            <p className="status-text">{props.online ? "Online" : "Offline"}</p>
      </div>
    </div>
  
</contact>

}

Contact.proTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    
    }


export default Contact; 