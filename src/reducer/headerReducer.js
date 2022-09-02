/*
接收action，进行逻辑处理
*/
const initState = {
    tradition:true
    
}
exports.headerReducer = (state = initState, action) => {
    switch(action.type) {
        case 'trade_action':
            return {
                tradition:true
            };
        case 'nlp_action':
            return {
                tradition:false
            };
        default:
            return state;
        
    }
    
};