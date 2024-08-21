import { useParams } from 'react-router-dom';
import NavbarLogin from '../../TrangChu/NabarLogin/NavbarLogin';
import Navbar from '../../TrangChu/Navbar/Navbar';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../../Context/UserContext';
import BookingWidget from './BookingWidget';

function DetailPage() {
    const { id } = useParams();
    const [place, setPlace] = useState(null);
    const [showAllPhotos, setShowAllPhotos] = useState(false);
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get(`/places/${id}`).then((res) => {
            console.log(res.data);

            setPlace(res.data);
        });
    }, [id]);

    if (!place) {
        return '';
    }
    if (showAllPhotos) {
        return (
            <div className="absolute bg-black text-white inset-0 min-h-screen object-cover">
                <div className="bg-black p-8 grid gap-2">
                    <div>
                        <h2 className="text-3xl">Photos of {place.title}</h2>
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
                    {place?.photos?.length > 0 &&
                        place.photos.map((photo) => (
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
            {!user && <Navbar />}
            <NavbarLogin />
            <br />
            <br />
            <br />
            <br />
            <div className="px-3 bg-gray-200 py-3">
                <h1 className="text-2xl">{place.title}</h1>
                <a
                    className="flex mt-1 underline gap-1"
                    href={'https://maps.google.com?' + place.title + place.address}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                    </svg>

                    {place.address}
                </a>

                <div className="relative">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="h-[400px] col-span-1 md:col-span-2">
                            <img
                                src={'http://localhost:4000/uploads/' + place.photos[0]}
                                alt=""
                                class="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        <div class="grid grid-cols-1 gap-1">
                            <div class="w-full h-[200px]">
                                <img
                                    src={'http://localhost:4000/uploads/' + place.photos[1]}
                                    alt=""
                                    class="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div class="w-full h-[200px]">
                                <img
                                    src={'http://localhost:4000/uploads/' + place.photos[2]}
                                    alt=""
                                    class="w-full h-full object-cover rounded-lg"
                                />
                            </div>
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

                <div className="grid gap-5 grid-cols-[2fr_1fr] my-3">
                    <div>
                        <div className="my-3">
                            <h2 className="text-3xl mb-2">Description</h2>
                            {place.description}
                        </div>
                        CheckIn: {place.checkIn}h <br />
                        CheckOut: {place.checkOut}h <br />
                        Số người tối đa: {place.maxPerson}
                    </div>
                    <BookingWidget place={place} />
                </div>
                <div className="grid grid-cols-2 py-8">
                    <div>
                        <h2 className="text-3xl my-2">Lịch trình tour</h2>
                        {place.extraInfo}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;
