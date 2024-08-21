import { useContext, useState } from 'react';
import { UserContext } from '../../../Context/UserContext';
import NavbarLogin from '../../TrangChu/NabarLogin/NavbarLogin';
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import PlacesPage from './PlacesPage';
import AccountNav from './AccountNav';

function ProfilePage() {
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

            <div>
                <AccountNav />
                {subpage === 'profile' && (
                    <div className="text-center max-w-lg mx-auto">
                        Logged in as {user.email.slice(0, -10)} ({user.email})<br />
                        <button onClick={loggout} className="bg-main rounded-full text-white min-w-44 mt-2 p-1">
                            Logout
                        </button>
                    </div>
                )}
                {subpage === 'places' && <PlacesPage />}
            </div>
        </div>
    );
}

export default ProfilePage;
