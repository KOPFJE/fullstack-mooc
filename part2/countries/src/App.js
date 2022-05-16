import { useEffect, useState } from 'react';
import axios from 'axios';
import Countries from './components/Countries';
import Search from './components/Search';


function App() {
  const [countryList, setCountryList] = useState([]);
  const [filterStr, setFilterStr] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("https://restcountries.com/v3.1/all").then(
        res => {
          setCountryList(res.data);
        }
      );
    };
    fetchData().catch(console.error);
  }, []);

  const handleFilterChange = (e) => {
    e.preventDefault();
    setFilterStr(e.target.value);
  };

  return (
    <div>
      <h1>Countries</h1>
      <Search handleChange={handleFilterChange} />
      <Countries countryList={countryList} filter={filterStr} />
    </div>
  );
}

export default App;
