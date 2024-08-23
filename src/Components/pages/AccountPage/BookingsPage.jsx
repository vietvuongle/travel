import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../Context/UserContext';
import Navbar from '../../TrangChu/Navbar/Navbar';
import NavbarLogin from '../../TrangChu/NabarLogin/NavbarLogin';
import AccountNav from './AccountNav';
import PlaceImg from './PlaceImg';
import { format } from 'date-fns';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BookingsPage() {
    const { user } = useContext(UserContext);
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        axios.get('/bookings').then((response) => {
            setBookings(response.data);
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
            <div className="px-3">
                <h1 className="text-2xl pb-2">Các tour đã đặt</h1>
                {bookings.length > 0 &&
                    bookings.map((booking, index) => (
                        <Link
                            key={index}
                            to={`/account/bookings/${booking._id}`}
                            className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden"
                        >
                            <div className="w-48 cursor-pointer">
                                <PlaceImg place={booking.place} />
                            </div>
                            <div>
                                <h2 className="text-2xl pb-3 underline">{booking.place.title}</h2>
                                <div className="pb-2">Ngày đi: {format(new Date(booking.checkIn), 'dd-MM-yyyy')}</div>
                                <div>
                                    <h3>
                                        Giá: {booking.price}đ/{booking.price / booking.place.price} người
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
}

export default BookingsPage;
