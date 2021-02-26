import './App.css';
import useRequest from './LoadingState.js';
import ShowData from './ShowData.js';
import ClipLoader from "react-spinners/ClipLoader";

function App() {

  // error not used
  const { data, loading, error } = useRequest(`https://lookers-api.herokuapp.com/cars`);

  return (
    <div className="App">
      <header className="App-header">
        {
          loading ? <ClipLoader color={'white'} loading={loading} size={150}/> : <ShowData data={data}/>
        }     
      </header>
    </div>
  );
}

export default App;
