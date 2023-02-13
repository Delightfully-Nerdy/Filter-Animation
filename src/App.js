import './App.css';

function App() {

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=cb91d9e1c514b4e3cd72936e076cac85&language=en-US&page=1');
    const movies = await data.json();
    
  }

  return (
    <div className="App">
      <h1>
        Hello
      </h1>
    </div>
  );
}

export default App;


// cb91d9e1c514b4e3cd72936e076cac85 