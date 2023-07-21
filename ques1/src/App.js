import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Fetch data from the URL
  //       const response1 = await fetch('http://20.244.56.144/numbers/primes');
  //       const posts = await response1.json();
  //       setPosts(posts);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  
  // return (
  //   <div className="App">
  //     <pre>{JSON.stringify(posts, null, 2)}</pre>
  //   </div>
  // );


  const [endpoint, setEndpoint] = useState('');
  const [data, setData] = useState([]);

  const handleFetchData = async () => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setData([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)}
        placeholder="Enter API endpoint URL"
      />
      <button onClick={handleFetchData}>Fetch Data</button>

      <h2>Data from API:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
