import FilterableSchoolTable from './components/FilterableSchoolTable';
import { useEffect, useState } from 'react';
import Login from './components/Login';

function App() {
  const [schools, setSchools] = useState([]);

 useEffect(() => {
    fetch('http://localhost:3000/api/schools')
      .then((res) => res.json())
      .then((data) => {
        setSchools(data.data)})
      .catch((err) => console.error(err));
  }, []);


  return (
    <div>

      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">School Table</h1>
        <FilterableSchoolTable schools={schools} />
      </div>
      <div className='grid w-[100%] h-screen place-items-center bg-indigo-600'>
        <Login />
      </div>
    </div>
  );
}

export default App;