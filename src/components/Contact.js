import React from 'react';
import './Contact.css'

const status = true

function Contact () {

return <contact className='Contact'>
    <img className="avatar" src='https://randomuser.me/api/portraits/lego/1.jpg' alt='This is Avatar' />
    <div className='block1'>
        <h3 className='name'>JoJo</h3>
    
        <div className='status'>
                    <div className='status-online'></div>
                    <div className='status-text'>{status ? "Online" : "Offline"}</div>
         </div>
    </div>

</contact>

}

export default Contact; 