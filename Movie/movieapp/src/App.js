import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import styles from './styles';
import ErrorBoundary from './ErrorBoundary';
function App() {
  return (
    <div className="App" style={styles.mainContainer}>

      <Header />
      <Body />
    </div>
  );
}

export default App;
