import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}
export default App;







































// function App() {
//   return (
//     <div className="App">
//       <LoadCountries></LoadCountries>
//     </div>
//   );
// }

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       // .then(data => console.log(data))
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h2>Rest Countries</h2>
//       <p>Available countries:{countries.length}</p>
//       {/* {
//         countries.map(country => <p>{country.name.common}</p>)
//       } */}
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props) {
//   return (
//     <div>
//       <h3>Name:{props.name}</h3>
//       <p>Population:{props.population}</p>
//     </div>
//   )

// }


