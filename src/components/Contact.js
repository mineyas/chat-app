import React from 'react';
import './Contact.css'
import PropTypes from 'prop-types';



class Contact extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
          online: false
        };
      }
      render() {
        return (
          <contact className="Contact">
            <img class="avatar" src={this.props.avatar} alt={this.props.name} />
    
            <div className="name">
              <h3>{this.props.name}</h3>
    
              <div className="status">
                <span
                  className={this.state.online ? "status-online" : "status-offline"}
                  onClick={event => {
                    const newStatus = !this.state.online;
                    this.setState({ online: newStatus });
                  }}
                />
                <p className="status-text">
                  {" "}
                  {this.state.online ? "Online" : "Offline"}{" "}
                </p>
              </div>
            </div>
          </contact>
        );
      }
    }

Contact.proTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    
    }


export default Contact; 