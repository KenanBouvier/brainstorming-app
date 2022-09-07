// import {} from 'react'
import useStartupsContext from '../../hooks/useStartupsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Startup = (props:any) => {
  const {idea,createdAt,_id} = props.data;
  const {dispatch} = useStartupsContext();

  const handleClick = async ()=>{
    const response = await fetch(`/api/startups/${_id}`,{
      method:'DELETE',
    })
    const json = await response.json();
    if(response.ok){
      dispatch({type:'DELETE_STARTUP',payload:json});
    }
  }

  return (
    <div className='startup-details'>
      <h4>Idea summary</h4>
      <p>{idea.summary}</p>
      
      <h4>Problem</h4>
      <p>{idea.problem}</p>

      <h4>Solution</h4>
      <p>{idea.solution}</p>
      <p>{formatDistanceToNow(new Date(createdAt),{addSuffix:true})}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default Startup