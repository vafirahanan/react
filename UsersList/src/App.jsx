
import React, { useEffect, useState } from 'react'
import Usertable from './components/usertable';



const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((res) => setData(res))
      .catch((error) => console.log(error))
  }, []);

  console.log(data);

  return (
    <div>
      <h1>list of users</h1>
      {/* <Usertable */}
        data={data}
      />
    </div>
  )

}
export default App;
