// import '../assets/icons/fontawesome.min.css';
import Header from './Header';
import ControlPanel from './ControlPanel';
import '../styles/App.css';

const App = () => {
  return (
      <div className='App'>
        <div className="left">
          <ControlPanel />
        </div>
        <div className="right">
          <Header />
        </div>
      </div>
  );
};

export default App;