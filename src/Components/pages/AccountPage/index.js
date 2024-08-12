import { useContext, useState } from 'react';
import { UserContext } from '../../../Context/UserContext';
import NavbarLogin from '../../TrangChu/NabarLogin/NavbarLogin';
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';

function AccountPage() {
    const [redirect, setRedirect] = useState(null);
    const { ready, user, setUser } = useContext(UserContext);
    let { subpage } = useParams();

    if (subpage === undefined) {
        subpage = 'profile';
    }

    async function loggout() {
        await axios.post('/loggout');
        setRedirect('/');
        setUser(null);
    }

    if (!ready) {
        return 'Loading...';
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />;
    }

    function linkClasses(type = null) {
        let classes = 'py-2 px-6';
        if (type === subpage) {
            classes += ' bg-main text-white rounded-full';
        }
        return classes;
    }

    if (redirect) {
        return <Navigate to={redirect} />;
    }

    return (
        <div>
            <div>
                <NavbarLogin />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
                <nav className="w-full justify-center flex gap-2 mb-8">
                    <Link className={linkClasses('profile')} to={'/account'}>
                        My profile
                    </Link>
                    <Link className={linkClasses('bookings')} to={'/account/bookings'}>
                        My bookings
                    </Link>
                    <Link className={linkClasses('places')} to={'/account/places'}>
                        My accommodations
                    </Link>
                </nav>
                {subpage === 'profile' && (
                    <div className="text-center max-w-lg mx-auto">
                        Logged in as {user.email.slice(0, -10)} ({user.email})<br />
                        <button onClick={loggout} className="bg-main rounded-full text-white min-w-44 mt-2 p-1">
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AccountPage;
