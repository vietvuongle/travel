import { useParams } from 'react-router-dom';

function BookingPlace() {
    const { id } = useParams();
    return <div>single booking: {id}</div>;
}

export default BookingPlace;
