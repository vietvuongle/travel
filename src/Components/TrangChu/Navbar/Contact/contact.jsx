import React from 'react';
import Navbar from '../Navbar';
import img from '../../../../Assets/img(4).webp';
import banner_left from '../../../../Assets/banner-left.png';
import banner_right from '../../../../Assets/banner-right.png';
import visa from '../../../../Assets/visa.png';
import jcb from '../../../../Assets/jcb.png';
import paypal from '../../../../Assets/paypal.png';
import logo from '../../../../Assets/Logo.png';
import mastercard from '../../../../Assets/Mastercard.png';
import './contact.scss';
import { Link } from 'react-router-dom';
const contact = () => {
    return (
        <div className="contact-page">
            <Navbar />
            <div>
                <div className="contact-content">
                    <div className="contact-top">
                        <img src={img} alt="Contact Us" className="contact-top-image" />
                        <div className="contact-top-text">
                            <h1>Contact Us</h1>
                            <ul className="text-list">
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact-middle">
                        <div class="contact-form-wrapper">
                            <div className="contact-form-left">
                                <h3>Reach Us Anytime</h3>
                                <form>
                                    <div className="form-group">
                                        <label for="Name">*Name</label>
                                        <input type="text" id="name" placeholder="Nguyễn Văn A" />
                                    </div>
                                    <div className="form-group">
                                        <label for="Email">Email</label>
                                        <input type="text" id="email" placeholder="abcde111@gmail.com" />
                                    </div>
                                    <div className="form-group">
                                        <label for="phone">Phone</label>
                                        <input type="text" id="phone" placeholder="012345678910" />
                                    </div>
                                    <div class="form-group">
                                        <label for="message">*Write Your Message</label>
                                        <textarea id="message" placeholder="What’s on your mind"></textarea>
                                    </div>
                                    <button type="submit" class="submit-btn">
                                        Submit Now
                                    </button>
                                </form>
                            </div>
                            <div className="contact-info-right">
                                <div className="info-group">
                                    <div className="title">
                                        <h6>Phone</h6>
                                    </div>
                                    <div className="content">
                                        <p>+84 369 745 246</p>
                                        <p>+84 369 745 246</p>
                                    </div>
                                    <div className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="info-group">
                                    <div className="title">
                                        <h6>Email Now</h6>
                                    </div>
                                    <div className="content">
                                        <p>info@example.com</p>
                                        <p>example@example.com</p>
                                    </div>
                                    <div className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-at-sign"
                                        >
                                            <circle cx="12" cy="12" r="4"></circle>
                                            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="info-group">
                                    <div className="title">
                                        <h6>Location</h6>
                                    </div>
                                    <div className="content">
                                        <p>77 Nguyễn Huệ, Phú Nhuận, Thành phố Huế, Thừa Thiên Huế</p>
                                    </div>
                                    <div className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-map-pin"
                                        >
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                    </div>
                                </div>
                                <div class="info-group">
                                    <div className="title">
                                        <h6>Opening Time</h6>
                                    </div>
                                    <div className="content">
                                        <p>8:00AM - 10:PM</p>
                                    </div>
                                    <div className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-calendar"
                                        >
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1608.7714478776224!2d107.5919970931486!3d16.459078018225963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a13f462a1445%3A0x1b70ba6cb49fb526!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIEh14bq_!5e0!3m2!1svi!2s!4v1724244657524!5m2!1svi!2s"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Dai Hoc Khoa Hoc Hue"
                        ></iframe>
                        <div className="banner-selection">
                            <div className="container">
                                <div className="row">
                                    <div className="banner-content">
                                        <h2>Join The Newsletter</h2>
                                        <p>To receive our best monthly deals</p>
                                        <form>
                                            <div className="from-inner">
                                                <input
                                                    type="email"
                                                    placeholder="Enter your Gmail"
                                                    fdprocessedid="8choel"
                                                />
                                                <button type="submit" className="from-arrow">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-arrow-left"
                                                    >
                                                        <line x1="19" y1="12" x2="5" y2="12"></line>
                                                        <polyline points="12 19 5 12 12 5"></polyline>
                                                    </svg>
                                                </button>
                                                <img src={banner_left} alt="left" className="banner-left" />
                                                <img src={banner_right} alt="right" className="banner-right" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-footer">
                        <div className="container">
                            <div className="footer-top">
                                <div className="footer-row">
                                    <div className="col content-1 ">
                                        <div className="footer-widget">
                                            <div className="widget-title">
                                                <h5>We Are Here</h5>
                                            </div>
                                            <p>
                                                KS88 là thành viên của Tập đoàn Booking KS, nhà cung cấp dịch vụ du lịch
                                                trực tuyến & các dịch vụ có liên quan hàng đầu thế giới
                                            </p>
                                            <div className="payment-partner">
                                                <div className="widget-title">
                                                    <h5>Payment Partner</h5>
                                                </div>
                                                <div className="icons">
                                                    <ul className="icons-img">
                                                        <li>
                                                            <img src={visa} alt="visa" />
                                                        </li>
                                                        <li>
                                                            <img src={paypal} alt="paypal" />
                                                        </li>
                                                        <li>
                                                            <img src={jcb} alt="jcb" />
                                                        </li>
                                                        <li>
                                                            <img src={mastercard} alt="mastercard" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col content-2 ">
                                        <div className="footer-widget">
                                            <div className="single-contact ">
                                                <div className="widget-title">
                                                    <h5>Phone</h5>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-phone"
                                                    >
                                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                                    </svg>
                                                </div>
                                                <a href="tel:0356487412">+84 356 487 412 </a>
                                            </div>
                                            <div className="single-contact ">
                                                <div className="widget-title">
                                                    <h5>Send Mail</h5>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-send"
                                                    >
                                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                                    </svg>
                                                </div>
                                                <a href="mail:info@example.com">info@example.com</a>
                                            </div>
                                            <div className="single-contact ">
                                                <div className="widget-title">
                                                    <h5>Address</h5>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="28"
                                                        height="28"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-map-pin"
                                                    >
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </svg>
                                                </div>
                                                <a href="https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+Khoa+h%E1%BB%8Dc+Hu%E1%BA%BF/@16.4591216,107.5901477,17z/data=!3m1!4b1!4m6!3m5!1s0x3141a13f462a1445:0x1b70ba6cb49fb526!8m2!3d16.4591216!4d107.5927226!16s%2Fg%2F1221mxqk?hl=vi-VN&entry=ttu&g_ep=EgoyMDI0MDgyMC4xIKXMDSoASAFQAw%3D%3Dmail:info@example.com">
                                                    77 Nguyễn Huệ, Phú Nhuận, Thành phố Huế, Thừa Thiên Huế, Việt Nam
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col content-3 ">
                                        <div className="footer-widget">
                                            <div className="widget-title">
                                                <h5>Quick Link</h5>
                                            </div>
                                            <ul className="widget-list">
                                                <li className="list-content">
                                                    <Link to="/home">Home</Link>
                                                </li>
                                                <li className="list-content">
                                                    <Link to="/packages"> Packages</Link>
                                                </li>
                                                <li className="list-content">
                                                    <Link to="/shop">Shop</Link>
                                                </li>
                                                <li className="list-content">
                                                    <Link to="/about">About</Link>
                                                </li>
                                                <li className="list-content">
                                                    <Link to="/pages">Pages</Link>
                                                </li>
                                                <li className="list-content">
                                                    <Link to="/news">New</Link>
                                                </li>
                                                <li className="list-content">
                                                    <Link to="/contact">Contact</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col content-4 ">
                                        <div className="footer-widget">
                                            <div className="footer-logo">
                                                <Link to="/home" className="content-logo">
                                                    <img src={logo} alt="logo" />
                                                    <h3>Korean BrSE</h3>
                                                </Link>
                                            </div>
                                            <h3>Want To Booking Tour ?</h3>
                                            <button className="primary-btn1">
                                                <Link to="/pages">Book Tour Now</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default contact;
