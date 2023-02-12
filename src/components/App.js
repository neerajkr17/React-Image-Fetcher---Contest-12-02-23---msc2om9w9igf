import React from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';

const fetchPosts = async (id) => {
  let url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  return fetch(url);
}

const App = () => {
    const[data,setData] = useState([])
    const[id,setId]=usestate(null)
    const handleChange=(e)=>{
      setId(e.target.value)
}
    
    const lordData = async () => {
      fetchPosts(id)
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
        )}
            }
            
            useEffect(() => {
        loadData();
      }, [id])
      
      return(
        <div>
        <span>Id number</span>
        <input type="number" onChange={handleChange} />
  {data == null ? (<Loader/>):<PhotoFrame url={data.url} title={data.title}/>}
  </div>
  )
}


export default App;
