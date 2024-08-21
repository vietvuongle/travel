import { useContext } from 'react';
import { UserContext } from '../../../Context/UserContext';
import Navbar from '../../TrangChu/Navbar/Navbar';
import NavbarLogin from '../../TrangChu/NabarLogin/NavbarLogin';
import AccountNav from './AccountNav';

function BookingsPage() {
    const { user } = useContext(UserContext);
    return (
        <div>
            {!user && <Navbar />}
            <NavbarLogin />
            <br />
            <br />
            <br />
            <br />
            <AccountNav />
        </div>
    );
}

export default BookingsPage;
