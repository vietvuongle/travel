import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routers/index';
// import './app.scss';
import axios from 'axios';
import { UserContextProvider } from './Context/UserContext';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

const App = () => {
    return (
        <Router>
            <div>
                <UserContextProvider>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            return <Route key={index} path={route.path} element={<Page />} />;
                        })}
                    </Routes>
                </UserContextProvider>
            </div>
        </Router>
    );
};

export default App;
