import React from 'react'
import Startup from '../Startup';

const StartupList = (props:any) => {
  const {startups} = props;
  return (
    <div className="startups">
        {startups && startups.map((startup:any)=>{
          return(
           <Startup key={startup._id} data={startup}/>
          )
        })}
      </div>
  )
}

export default StartupList
