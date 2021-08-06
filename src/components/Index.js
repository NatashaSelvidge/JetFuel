import React, { Component } from 'react'
import { connect } from 'react-redux'
import Campaign from './Campaign'



class Index extends Component {
  render() {
    const campaigns = this.props.campaigns.campaigns.map( (campaign, i) => 
   <Campaign key={i} name={campaign.campaign_name} url={campaign.campaign_icon_url} pay_per_install={campaign.pay_per_install}
    />)
    // console.log(this.props.campaigns.campaigns)
    return (
      <div>
        <h3>
        {campaigns}
        </h3>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    campaigns: state.campaigns
  }
}
export default connect(mapStateToProps)(Index)
