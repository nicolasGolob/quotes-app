import './App.css';
import firebase from './utils/firebaseConfig';

const App = () => {
  const [isItConnected, setIsItConnected] = useState(false);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
