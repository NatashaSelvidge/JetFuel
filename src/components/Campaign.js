import React, { Component } from 'react'
import "../styling/Campaign.css"
import 

class Campaign extends Component {
  render() {
    const { name, url, pay_per_install } = this.props;
    return (
      <div className="campaign">
        <img className="campaign__iconURL" src={url}/>
        <div className="campaign__container">
          <h3 className="campaign__name">{name}</h3>
          <p>{pay_per_install}<small> per install </small></p>
        </div>
      
      </div>
        
    )
  }
}

export default Campaign
