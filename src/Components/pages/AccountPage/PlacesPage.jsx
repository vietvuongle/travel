import { Link } from 'react-router-dom';
import AccountNav from './AddPlace/AccountNav';
import NavbarLogin from '../../TrangChu/NabarLogin/NavbarLogin';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../TrangChu/Navbar/Navbar';
import { UserContext } from '../../../Context/UserContext';
import PlaceImg from './PlaceImg';

function PlacesPage() {
    const { user } = useContext(UserContext);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.get('/user-places').then(({ data }) => {
            setPlaces(data);
        });
    }, []);

    return (
        <div>
            {!user && <Navbar />}
            <NavbarLogin />
            <br />
            <br />
            <br />
            <br />
            <AccountNav />
            <div className="text-center">
                <Link
                    className="inline-flex gap-1 bg-main text-white py-2 px-6 rounded-full"
                    to={'/account/places/new'}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add new place
                </Link>
            </div>
            <div className="mt-4">
                {places.length > 0 &&
                    places.map((place, index) => (
                        <div className="flex bg-gray-200 gap-4 p-4 rounded-2xl">
                            <Link
                                key={index}
                                to={'/account/places/' + place._id}
                                className="bg-gray-200 gap-4 p-4 rounded-2xl flex"
                            >
                                <div className="flex w-32 h-32 bg-gray-400">
                                    <PlaceImg place={place} />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl">{place.title}</h2>
                                    <p className="text-sm mt-2">{place.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default PlacesPage;
