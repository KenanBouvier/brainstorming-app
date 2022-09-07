import {useEffect} from 'react'
import axios from 'axios';
import Startup from '../../components/Startup';
import StartupForm from '../../components/StartupForm';
import useStartupsContext from '../../hooks/useStartupsContext';

const Home = () => {
  // const [startups,setStartups]:any = useState(null);
  const {startups,dispatch} = useStartupsContext();

  useEffect(()=>{
    const fetchStartups = ()=>{
      axios.get('/api/startups')
        .then((response)=>{
          dispatch({type:'SET_STARTUPS',payload:response.data})
        })
    }
    fetchStartups();
  },[dispatch]);

  return (
    <div className='home'>
      <div className="startups">
        {startups && startups.map((startup:any)=>{
          return(
           <Startup key={startup._id} data={startup}/>
          )
        })}
      </div>
      <StartupForm/>
    </div>
  )
}

export default Home
