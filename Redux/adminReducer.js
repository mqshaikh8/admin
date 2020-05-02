const initialState = {}

    const inforeducer = (state=initialState, action) => {
    switch (action.type) {
        case "login":
            return {...state,infoType: action.payload}
     default:
       return state
               }
    }
export default inforeducer