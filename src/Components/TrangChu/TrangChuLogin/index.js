import NavbarLogin from '../NabarLogin/NavbarLogin';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import './trangchu.css';
import { useContext } from 'react';
import { UserContext } from '../../../Context/UserContext';
function TrangChuLogin() {
    const { user } = useContext(UserContext);
    return (
        <div>
            {!user && <Navbar />}
            {!!user && <NavbarLogin />}
            <br />
            <br />
            <br />
            <Home />
            <Main />
            <Footer />
        </div>
    );
}

export default TrangChuLogin;
