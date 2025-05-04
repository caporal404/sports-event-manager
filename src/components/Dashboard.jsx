import { Outlet } from 'react-router-dom';
import Left from './Left';
import Right from './Right';
import Header from './Header';
import ControlPanel from './ControlPanel';

const style = {
    height: '100vh',
    display: 'flex'
}

const Dashboard = () => {
  return (
    <div className='dashboard' style={style}>
        <Left>
            <ControlPanel />
        </Left>
        <Right>
            <Header />
            <Outlet />
        </Right>
    </div>
  )
}

export default Dashboard;