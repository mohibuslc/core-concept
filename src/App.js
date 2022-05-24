// JSX CONCEPT 

// study come out from there how JSX work .... 



import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2> Im React persone </h2>
        <Person name =" Sakibul Hassan " job = " React engineer" ></Person>
        <Person name = "Tina " job =" WordPress Developer "></Person>
        <Person name = "Kamal Ahmed" job =" Business man "></Person>
      </header>
    </div>
  );

  function Person(props) {

    var design = {

      color: ' yellow',
      border: ' 2px solid green ',
      padding: '10px',
      margin: '20px',
      borderRadius: '10px'
    }
    return (

      <div style={design}>

        <h1>Name : {props.name} </h1>
        <p>Profession : {props.job }</p>
      </div>
    )
  }
}

export default App;
