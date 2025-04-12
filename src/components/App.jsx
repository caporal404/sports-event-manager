import Header from './Header';
import ControlPanel from './ControlPanel';
import '../styles/App.css';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="left">
          <ControlPanel />
        </div>
        <div className="right"></div>
      </main>
    </>
  );
};

export default App;