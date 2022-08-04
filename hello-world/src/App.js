
import './App.css';
import Greet from './components/greet'
import About from './components/about'


function App() {
  return (
    <div className="App">
      <Greet />
      <About />
    </div>
  );
}

// class App extends component{
//   render(){
//       return(
//         <div className="App">
//         <Greet />
//         <About />
//         <Welcome />
//       </div>
//       );
//   }
// }

export default App;
