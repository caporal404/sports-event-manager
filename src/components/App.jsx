import '../styles/App.css';
import Left from './Left';
import Right from './Right';
import Header from './Header';
import ControlPanel from './ControlPanel';
import ViewProvider from '../hooks/view-hooks';
import PlayerProvider from '../hooks/player-hooks';
import PlayerSection from './PlayerSection';
import AddPlayerForm from './AddPlayerForm';

const App = () => {
  // const { showPlayerSection } = useViews();

  return (
    <div className='App'>
        <Left>
          <ViewProvider>
            <ControlPanel />
          </ViewProvider>
        </Left>
        <Right>
          <Header />
          <ViewProvider>
            <PlayerProvider>
              <PlayerSection>
                <AddPlayerForm/>
              </PlayerSection>
            </PlayerProvider>
          </ViewProvider>
        </Right>
    </div>
  );
};

export default App;