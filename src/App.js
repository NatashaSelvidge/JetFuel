import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getCampaigns } from './actions';
import Index from "./components/Index"

class App extends Component {

  componentDidMount(){
    this.props.getCampaigns();
  }
  render(){
    if(this.props.loading){
      return(
        <h3>Loading...</h3>
      )
    }

    return (
      <div className="App">
        <h1>PLUGS</h1>
      <Index />
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getCampaigns })(App);
