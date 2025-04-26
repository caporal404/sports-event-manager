import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <div className='logo'>Event Manager</div>
            <div className="user-actions">
                <div className="user-logo">
                    <i className="fas fa-user"></i>
                </div>
                <div className="actions">
                    <a href="#">Se connecter</a>
                    <a href="#">S&apos;inscrire</a>
                </div>
            </div>
        </header>
    );
  };
  
  export default Header;