export const getCampaigns = () => {
  return dispatch => {
    dispatch({type: "LOADING"})
    fetch("https://www.plugco.in/public/take_home_sample_feed")
    .then(response => response.json())
    .then(campaigns => dispatch({ type: "SET_CAMPAIGNS", campaigns }))
    // .then(campaigns => console.log(campaigns))
  }
}