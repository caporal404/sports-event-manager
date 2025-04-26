import { Outlet } from 'react-router-dom';
import Left from './Left';
import Right from './Right';
import Header from './Header';
import ControlPanel from './ControlPanel';

const Layout = () => {
  return (
    <>
    <Left>
        <ControlPanel />
    </Left>
    <Right>
        <Header />
        <Outlet />
    </Right>
    </>
  )
}

export default Layout;