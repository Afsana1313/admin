import './App.css';
import { useEffect,useState,createContext } from 'react'
import Login from './component/admin/Login';
import Layout from './component/Layout';
import { blogposts } from './other/blogposts';

export const ThemeContext = createContext();
function App() {
   const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(blogposts)
  },[])
  useEffect(() => {
    setLoggedIn(localStorage.getItem('loggedIn'));
  }, [])

  const [loggedIn, setLoggedIn] = useState('false')
  
  return (
    <ThemeContext.Provider value={{ loggedIn, setLoggedIn , posts, setPosts}}>
        <div className="App">
        {loggedIn === 'true' ? <Layout /> : <Login
          setLoggedIn={()=> setLoggedIn('true')}
        />}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
