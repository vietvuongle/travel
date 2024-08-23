import axios from 'axios';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function BookingWidget({ place }) {
    const [checkIn, setCheckIn] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [redirect, setRedirect] = useState('');

    async function bookThisPlace() {
        const response = await axios.post('/bookings', {
            checkIn,
            numberOfGuests,
            name,
            phone,
            place: place._id,
            price: place.price * numberOfGuests,
        });
        const bookingId = response.data._id;
        setRedirect(`/account/bookings/${bookingId}`);
    }

    if (redirect) {
        return <Navigate to={redirect} />;
    }

    return (
        <div>
            <div className="bg-white p-3 rounded-2xl">
                <div className="text-2xl text-center">Price: {place.price}đ/Người</div>
                <div className="border rounded-2xl mt-4">
                    <div>
                        <div className="py-2 px-4">
                            <label className="pr-5">CheckIn:</label>
                            <input type="date" value={checkIn} onChange={(ev) => setCheckIn(ev.target.value)} />
                        </div>
                    </div>
                    <div className="py-2 px-4 border-t">
                        <label>Số người:</label>
                        <input
                            type="number"
                            value={numberOfGuests}
                            onChange={(ev) => setNumberOfGuests(ev.target.value)}
                        />
                    </div>
                    <div className="py-2 px-4 border-t">
                        <label>Full Name:</label>
                        <input type="text" value={name} onChange={(ev) => setName(ev.target.value)} />
                        <label>Phone number:</label>
                        <input type="tel" value={phone} onChange={(ev) => setPhone(ev.target.value)} />
                    </div>
                </div>
                <div className="mt-3 ml-3 underline">
                    <h2>Total: {place.price * numberOfGuests}đ</h2>
                </div>
                <button className="main mt-3" onClick={bookThisPlace}>
                    Book now
                </button>
            </div>
        </div>
    );
}

export default BookingWidget;
