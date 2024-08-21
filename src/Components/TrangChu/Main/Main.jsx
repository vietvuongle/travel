import React, { useEffect, useState } from 'react';
import './main.scss';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.get('/places').then((response) => {
            setPlaces(response.data);
        });
    }, []);

    //lets create a react hook to add a scroll animation....
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Xem thêm địa điểm
                </h3>
            </div>

            <div className="secContent grid">
                {/*High ordfer array method(map)  {id, imgSrc, destTitle, location, grade,fees, description}*/}

                {places.length > 0 &&
                    places.map((place, index) => {
                        return (
                            <div key={index} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    {place.photos?.[0] && (
                                        <img
                                            className="img-div cursor-pointer"
                                            src={'http://localhost:4000/uploads/' + place.photos?.[0]}
                                            alt={place.title}
                                        />
                                    )}
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{place.title}</h4>
                                    <span className="continent flex name">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="cursor-pointer">{place.address}</span>
                                    </span>
                                    <div className="fees">
                                        <div className="price">
                                            <h5>{place.price}đ</h5>
                                        </div>
                                    </div>

                                    <div className="desc text-overflow-ellipsis overflow-hidden ">
                                        <p>{place.description}</p>
                                    </div>
                                    <button className="btn">
                                        <Link to={'/place/' + place._id} className="flex">
                                            {' '}
                                            CHI TIẾT <HiOutlineClipboardCheck className="icon ml-2" />
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </section>
    );
};

export default Main;
