import axios from 'axios';
import NavbarLogin from '../../TrangChu/NabarLogin/NavbarLogin';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

function BookingPlace() {
    const { id } = useParams();
    const [booking, setBooking] = useState(null);
    const [showAllPhotos, setShowAllPhotos] = useState(false);

    useEffect(() => {
        axios.get('/bookings').then((response) => {
            const foundBooking = response.data.find(({ _id }) => _id === id);
            console.log(foundBooking);

            if (foundBooking) {
                setBooking(foundBooking);
            }
        });
    });

    if (!booking) {
        return '';
    }

    if (showAllPhotos) {
        return (
            <div className="absolute bg-black text-white inset-0 min-h-screen object-cover">
                <div className="bg-black p-8 grid gap-2">
                    <div>
                        <h2 className="text-3xl">Photos of {booking.place.title}</h2>
                        <button
                            onClick={() => setShowAllPhotos(false)}
                            className="fixed flex w-36 p-2 right-10 top-8 rounded-2xl shadow shadow-black bg-white text-black"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                            close photos
                        </button>
                    </div>
                    {booking.place?.photos?.length > 0 &&
                        booking.place.photos.map((photo) => (
                            <div>
                                <img src={'http://localhost:4000/uploads/' + photo} alt="" />
                            </div>
                        ))}
                </div>
            </div>
        );
    }

    return (
        <div>
            <NavbarLogin />
            <br />
            <br />
            <br />
            <br />
            <div className="px-3 py-3">
                <h1 className="text-3xl">{booking.place.title}</h1>
                <a className="flex mt-1 underline gap-1" href={'https://maps.google.com?' + booking.place.address}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                    </svg>
                    {booking.place.address}
                </a>
                <div className="bg-gray-300 px-6 py-2 my-4 rounded-2xl flex justify-between">
                    <div>
                        <h1 className="text-2xl">Thông tin tour mà bạn đã book</h1>
                        <div className="pb-2">Ngày đi: {format(new Date(booking.checkIn), 'dd-MM-yyyy')}</div>
                    </div>
                    <div>
                        <h3>
                            Giá: {booking.price}đ/{booking.price / booking.place.price} người
                        </h3>
                    </div>
                </div>
                <div className="relative">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="h-[400px] col-span-1 md:col-span-2">
                            <img
                                src={'http://localhost:4000/uploads/' + booking.place.photos[0]}
                                alt=""
                                class="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        <div class="grid grid-cols-1 gap-1">
                            <div class="w-full h-[200px]">
                                <img
                                    src={'http://localhost:4000/uploads/' + booking.place.photos[1]}
                                    alt=""
                                    class="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div class="w-full h-[200px]">
                                <img
                                    src={'http://localhost:4000/uploads/' + booking.place.photos[2]}
                                    alt=""
                                    class="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowAllPhotos(true)}
                        className="flex gap-1 absolute bottom-3 right-5 py-2 px-2 rounded-2xl bg-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                            />
                        </svg>
                        Xem thêm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookingPlace;
