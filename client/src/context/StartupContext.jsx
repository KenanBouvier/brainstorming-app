import React,{createContext,useReducer} from 'react'

export const StartupContext = createContext();

export const startupReducer = (state,action)=>{
  switch(action.type){
    case 'SET_STARTUPS':
      return {
        startups:action.payload
      } 
    case 'CREATE_STARTUP':
      return {
        startups:[action.payload,...state.startups]
      }
    case 'DELETE_STARTUP':
        const filteredStartups = state.startups.filter((startup)=>{
          if(startup._id===action.payload._id){
            return false;
          }
          return true;
        })
      return{
        startups:filteredStartups
      }
    default:
      return state;
  }
}

export const StartupsContextProvider = (props)=>{
  const [state,dispatch] = useReducer(startupReducer,{
    startups: null
  });

  const {children} = props;
  return(
    <StartupContext.Provider value={{...state,dispatch}}>
      {children}
    </StartupContext.Provider>
  )
}