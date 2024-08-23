import TrangChu from '../Components/TrangChu/Trangchu';
import Login from '../Components/TrangChu/Login/Login';
import Register from '../Components/TrangChu/Register/Register';
import TrangChuLogin from '../Components/TrangChu/TrangChuLogin';
import ProfilePage from '../Components/pages/AccountPage/ProfilePage';
import PlacesPage from '../Components/pages/AccountPage/PlacesPage';
<<<<<<< HEAD
import PlacesFormPage from '../Components/pages/AccountPage/PlacesFormPage';
import DetailPage from '../Components/pages/AccountPage/DetailPage';
import BookingsPage from '../Components/pages/AccountPage/BookingsPage';
import BookingPlace from '../Components/pages/AccountPage/BookingPlace';
=======
import PlacesFormPage from '../Components/pages/AccountPage/AddPlace/PlacesFormPage';
import DetailPage from '../Components/pages/DetailPage/DetailPage';
import BookingsPage from '../Components/pages/AccountPage/AddPlace/BookingsPage';
import Operator from '../Components/pages/Operator/Guest';
import Vehicle from '../Components/pages/Operator/Vehicle';
import Place from '../Components/pages/Operator/Place';
import Tours from '../Components/pages/Operator/Tours';
import Hotel from '../Components/pages/Operator/Hotel';

>>>>>>> 1f78cd1 (code da sua css detail vs operator)

const publicRoutes = [
    { path: '/', component: TrangChu },
    { path: '/home', component: TrangChuLogin },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/account', component: ProfilePage },
    { path: '/account/places', component: PlacesPage },
    { path: '/account/places/new', component: PlacesFormPage },
    { path: '/account/places/:id', component: PlacesFormPage },
    { path: '/place/:id', component: DetailPage },
    { path: '/account/bookings', component: BookingsPage },
<<<<<<< HEAD
    { path: '/account/bookings/:id', component: BookingPlace },
=======
    { path: '/operator', component: Operator },
    { path: '/vehicle', component: Vehicle },
    { path: '/place', component: Place },
    { path: '/tour', component: Tours },
    { path: '/hotel', component: Hotel},

>>>>>>> 1f78cd1 (code da sua css detail vs operator)
];

export { publicRoutes };
