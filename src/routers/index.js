import TrangChu from '../Components/TrangChu/Trangchu';
import Operator from '../Components/pages/Operator';
import Login from '../Components/TrangChu/Login/Login';
import Vehicle from '../Components/pages/Operator/Vehicle';
import Place from '../Components/pages/Operator/Place';
import Tours from '../Components/pages/Operator/Tours';
import Register from '../Components/TrangChu/Register/Register';
import TrangChuLogin from '../Components/TrangChu/TrangChuLogin';
import AccountPage from '../Components/pages/AccountPage';

const publicRoutes = [
    { path: '/', component: TrangChu },
    { path: '/home', component: TrangChuLogin },
    { path: '/account/:subpage?', component: AccountPage },
    { path: '/operator', component: Operator },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/vehicle', component: Vehicle },
    { path: '/place', component: Place },
    { path: '/tour', component: Tours },
];

export { publicRoutes };
