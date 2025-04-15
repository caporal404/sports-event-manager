import '../styles/App.css';
import Left from './Left';
import Right from './Right';
import Header from './Header';
import ControlPanel from './ControlPanel';
import { useViews } from '../Hooks/view-hooks';
import PlayerProvider from '../Hooks/player-hooks';
import PlayerSection from './PlayerSection';

const App = () => {
  const { showPlayerSection } = useViews();

  return (
    <div className='App'>
        <Left>
          <ControlPanel />
        </Left>
        <Right>
          <Header />
          <PlayerProvider>
            { showPlayerSection && <PlayerSection /> }
          </PlayerProvider>
        </Right>
    </div>
  );
};

export default App;