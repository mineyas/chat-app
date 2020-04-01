import React from 'react';
import './Contact.css'

const online = true

function Contact () {

return <contact className='Contact'>
    <img className="avatar" src='https://randomuser.me/api/portraits/lego/1.jpg' alt='This is Avatar' />
    <div className='block1'>
        <h1 className='name'>JoJo</h1>
    
    <div className='block2'>
         <index className = "status-online"> {}</index>
        <p className = "status-text"> {online ? " Online" : " Offline"}</p>
        <div className='block3'>
            <p className='status-text'> I LOVE LEGOSSS </p>

        </div>


    </div>
    </div>









</contact>




}

export default Contact; 