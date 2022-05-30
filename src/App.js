// JSX CONCEPT 

// study come out from there how JSX work .... 



import './App.css';
import React, { useState } from 'react';




function App() {

  const Products = [
    { name: ' Norton Anti Virus', price: '$99.00', address: ' Tillaghore' },

    { name: 'Photo Shop', price: '$24.00' },

    { name: 'Muse', price: '$34.00' },

    { name: 'Keybord ', price: '$24.00' },

    { name: ' MotherBord', price: ' $ 200' }

  ]

  const nayoks = ['kamal', ' jamal', ' Tina']

  const Persons = [

    { name: ' Jamal', job: ' Web developer' },
    { name: 'Kamal', job: ' word Press developer ' }

  ]

  const nayoksData = nayoks.map(pd => pd)

  console.log(nayoksData)

  const productName = Products.map(pd => pd.price)
  console.log(productName)
  return (
    <div className="App">
      <header className="App-header">
        <h2> Im React persone </h2>

        <Count></Count>
        <u>
          <h2>Nayoks Name List</h2>
          {
            nayoks.map(pd =>

              <li>{pd}</li>

            )
          }

          <h2> Product  Name List</h2>
          {

            Products.map(pd => <li>{pd.name}</li>)
          }
        </u>
        {

          Products.map(pd => <Product product={pd}></Product>)
        }

        {

          Persons.map(pd => <Person person={pd}></Person>)
        }

      </header>
    </div>
  );
  function Count (){

    const [ count , setCount ] = useState(0) ;

    function handleClick (){

      const newCount = count + 1 ; 

      setCount(newCount)

    }
    function handleClick1 (){

      const newCount = count - 1 ; 

      setCount(newCount)

    }
 
      return(
    
        <div>
    
          <h1>Count : {count}</h1>

          <button onClick= {handleClick}> Incrase </button>

          <button onClick= {handleClick1}> Decrase </button>
        </div>
      )
    
    
    }
                                                                                                                   

  function Product(props) {

    const productStyle = {

      border: '1px solid gray',
      borderRadius: '5px',
      backgroundColor: 'lightgrey',
      height: '240px',
      width: '200px',
      float: 'left',
      color: 'red'


    }

    const { name, price, address } = props.product

    return (


      <div style={productStyle}>

        <h5>{name}</h5>
        <p>{price} </p>
        <p>{address}</p>
        <button> Click Me </button>


      </div>
    )

  }


  function Person(props) {

    var design = {

      color: 'yellow',
      border: '2px solid gold',
      width: '800px ',
      margin: '20px',
      borderRadius: '10px'
    }

    const { name, job } = props.person
    return (

      <div style={design}>

        <h1>Name : {name} </h1>
        <p>Profession : {job}</p>
      </div>
    )
  }
}



export default App;
