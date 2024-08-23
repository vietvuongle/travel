import { useEffect, useState } from 'react';
import PhotosUploader from './PhotosUploader';
import axios from 'axios';
import NavbarLogin from '../../../TrangChu/NabarLogin/NavbarLogin';
import AccountNav from './AccountNav';
import { Navigate, useParams } from 'react-router-dom';

function PlacesFormPage() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxPerson, setMaxPerson] = useState(1);
    const [price, setPrice] = useState(100);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/places/' + id).then((response) => {
            const { data } = response;
            setTitle(data.title);
            setAddress(data.address);
            setAddedPhotos(data.photos);
            setDescription(data.description);
            setExtraInfo(data.extraInfo);
            setCheckIn(data.checkIn);
            setCheckOut(data.checkOut);
            setMaxPerson(data.maxPerson);
            setPrice(data.price);
        });
    }, [id]);

    function inputHeader(text) {
        return <h2 className="text-2xl mt-4">{text}</h2>;
    }

    function inputDescription(text) {
        return <p className="text-gray-500 text-sm">{text}</p>;
    }

    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    }

    async function savePlace(ev) {
        ev.preventDefault();

        const placeData = {
            title,
            address,
            addedPhotos,
            description,
            extraInfo,
            checkIn,
            checkOut,
            maxPerson,
            price,
        };

        if (id) {
            //update
            await axios.put('/places', {
                id,
                ...placeData,
            });
            setRedirect(true);
        } else {
            //save
            await axios.post('/places', placeData);
            setRedirect(true);
        }
    }

    async function handleDelete() {
        await axios.delete('/places/' + id);
        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to={'/account/places'} />;
    }

    return (
        <div>
            <NavbarLogin />
            <br />
            <br />
            <br />
            <br />
            <AccountNav />
            <form onSubmit={savePlace} className="px-3">
                {preInput('Title', 'Nhập tiêu đề cho tour của bạn')}
                <input type="text" value={title} onChange={(ev) => setTitle(ev.target.value)} placeholder="title" />

                {preInput('Address', 'Nhập địa chỉ của tour')}
                <input
                    type="text"
                    value={address}
                    onChange={(ev) => setAddress(ev.target.value)}
                    placeholder="address"
                />

                {preInput('Photos', 'Thêm ảnh cho  tour của bạn')}
                <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

                {preInput('Description', 'Giới thiệu điểm đến')}
                <textarea value={description} onChange={(ev) => setDescription(ev.target.value)} />

                {preInput('Thông tin chi tiết', 'Trình bày lịch trình từng ngày của tour')}
                <textarea value={extraInfo} onChange={(ev) => setExtraInfo(ev.target.value)} />
                {preInput(
                    'Check in&out times, max guests',
                    ' add check in and out tiomes, remember to have' +
                        'some time window for cleaning the room between guests',
                )}
                <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
                    <div>
                        <h3 className="mt-2 -mb-1">Check in time</h3>
                        <input
                            type="Number"
                            value={checkIn}
                            onChange={(ev) => setCheckIn(ev.target.value)}
                            placeholder="14"
                        />
                    </div>
                    <div>
                        <h3 className="mt-2 -mb-1">Check out time</h3>
                        <input
                            type="Number"
                            value={checkOut}
                            onChange={(ev) => setCheckOut(ev.target.value)}
                            placeholder="11"
                        />
                    </div>
                    <div>
                        <h3 className="mt-2 -mb-1">Max number of guests</h3>
                        <input type="number" value={maxPerson} onChange={(ev) => setMaxPerson(ev.target.value)} />
                    </div>
                    <div>
                        <h3 className="mt-2 -mb-1">Price per person</h3>
                        <input type="number" value={price} onChange={(ev) => setPrice(ev.target.value)} />
                    </div>
                </div>
                <button className="green my-4">Save or update</button>
            </form>
            <button onClick={handleDelete} className="main my-2 w-48">
                Delete
            </button>
        </div>
    );
}

export default PlacesFormPage;
