import React,{useContext} from 'react';
import { StartupContext } from "../context/StartupContext";

const useStartupsContext = ()=>{
  const context = useContext(StartupContext);
  if(!context){
    throw Error('')
  }
  return context;
}

export default useStartupsContext;
