  // import logo from './logo.svg';

  import { useEffect } from 'react';
  import './App.css';

  import ApiList from './components/ApiList';
  import ButtonFilter from './components/ButtonFilter'
  import ListApi from './components/ListApi';
  import Use_axios from './components/Use_axios';


  function App() {
    const {fetchData, response, loading} = Use_axios('entries');

    useEffect(() => {
      fetchData({ params: {category: 'Animals' } })
    }, []);

    return (
      <div className='App'>
        <ApiList fetchData={fetchData} />
        <div className='container mx-auto max-w-4xl'>
          <ButtonFilter fetchData={fetchData} />
          <ListApi response={response} loading={loading} 
          />
        </div>
      </div>
    );
  }

  export default App;
