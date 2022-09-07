import React, {useState} from 'react';
import useStartupsContext from '../../hooks/useStartupsContext';

const StartupForm = ()=>{
  const [summary,setSummary] = useState('');
  const [problem,setProblem] = useState('');
  const [solution,setSolution] = useState('');
  const [error,setError] = useState(null);
  const {dispatch} = useStartupsContext();

  const handleSubmit = async(e:any)=>{
    e.preventDefault();

    const startup = {idea:{summary,problem,solution}};

    const response = await fetch('/api/startups',{
      method:'POST',
      body:JSON.stringify(startup),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const json = await response.json();

    if(!response.ok){
      setError(json.error);
    }
    else{
      setSummary('');
      setProblem('');
      setSolution('');
      setError(null);
      dispatch({type:'CREATE_STARTUP',payload:json})
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Create a new Startup</h3>

      <label>Startup summary (brief)</label>
      <input type="text" value={summary} onChange={(e)=>{setSummary(e.target.value)}}/>

      <label>What is the problem/unmet need?</label>
      <input type="text" value={problem} onChange={(e)=>{setProblem(e.target.value)}}/>

      <label>What is the solution?</label>
      <input type="text" value={solution} onChange={(e)=>{setSolution(e.target.value)}}/>

      <button>Launch Startup Idea!</button>
      {error && <div className='error'>{error}</div>}
    </form>
    
  )
}

export default StartupForm;