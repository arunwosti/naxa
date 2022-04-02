

export const GET_SERVICES = 'GET_SERVICES';
export const SET_SERVICES = 'SET_SERVICES';

export const getServices = ()=>({
    type: GET_SERVICES
});


export const setServices = (services)=>({
    type: SET_SERVICES,
    services: services
});


export const INITIAL_STATE ={
    
    services: []
};


const serviceReducer =(state=INITIAL_STATE, action)=>{
    switch (action.type){
        case GET_SERVICES:
            return{
                ...state,
            };
        case SET_SERVICES:
            return{
                ...state,
                services: action.services.sort((a,b)=> a.service_order- b.service_order)
            };
        
        
        
        default:
                return state;
    }
}

export default serviceReducer;