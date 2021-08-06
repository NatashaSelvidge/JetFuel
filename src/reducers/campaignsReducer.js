const initialState = {
  campaigns: [],
  loading: true
}

const campaignsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOADING": 
    return {
      ...state, 
      loading: true
    }
    case "SET_CAMPAIGNS":
      return {
        ...state,
        loading: false, 
        campaigns: action.campaigns
      }
    default:
      return state;
  }
}
export default campaignsReducer;