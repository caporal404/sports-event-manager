import '../styles/App.css';
import Left from './Left';
import Right from './Right';
import Header from './Header';
import ControlPanel from './ControlPanel';

const App = () => {
  return (
      <div className='App'>
        <Left>
          <ControlPanel />
        </Left>
        <Right>
          <Header />
        </Right>
      </div>
  );
};

export default App;