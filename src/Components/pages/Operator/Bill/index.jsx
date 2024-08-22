import styles from './Bill.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BillDetailsModal from './BillDetailsModal';

const cx = classNames.bind(styles);

function Bill() {
    const bills = [
        {
            id: 1,
            customerName: 'Nguyễn Thanh Tùng',
            tourName: 'Huế 3 ngày 2 đêm',
            price: '4.000.000đ',
            createdDate: '15/05/2024',
        },
        {
            id: 2,
            customerName: 'Đặng Thành Kiên',
            tourName: 'Đà Lạt 3 ngày 3 đêm',
            price: '3.500.000đ',
            createdDate: '27/06/2024',
        },
        {
            id: 3,
            customerName: 'Đỗ Thế Kiên',
            tourName: 'Hà Nội 2 ngày 1 đêm',
            price: '2.500.000đ',
        },
        {
            id: 4,
            customerName: 'Dương Quốc Hoàng',
            tourName: 'Hà Nội 4 ngày 3 đêm',
            price: '10.000.000đ',
        },
        {
            id: 5,
            customerName: 'Nguyễn Anh Tuấn',
            tourName: 'Hồ Chí Minh 3 ngày 2 đêm',
            price: '6.000.000đ',
        },
        {
            id: 6,
            customerName: 'Dương Quốc Hoàng',
            tourName: 'Đà Nẵng 3 ngày 2 đêm',
            price: '10.000.000đ',
        },
    ];
    const [selectedBill, setSelectedBill] = useState(null);
    const [showModal, setShowModal] = useState(null);

    const handleViewDetails = (bill) => {
        setSelectedBill(bill);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedBill(null);
    };

    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={cx('wrapper')}>
            {isOpen && (
                <div className={cx('menu')}>
                    <Sidebar />
                </div>
            )}
            <div className={cx('content')}>
                <div className={cx('nav')}>
                    <div className={cx('nav-home')}>
                        <button onClick={toggleMenu} className={cx('header')}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                        <p className={cx('pading10px')}>Home</p>
                        <p className={cx('pading10px')}>Contact</p>
                    </div>
                    <div className={cx('header-icon')}>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faComment} />
                        </button>
                    </div>
                </div>

                <div>
                    <div className={cx('form-create')}>
                        <div className={cx('form-content')}>
                            <h2>Quản lý hóa đơn</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên khách hàng</th>
                                        <th>Tên TOUR</th>
                                        <th>Giá</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bills.map((bill, index) => (
                                        <tr key={bill.id}>
                                            <td>{index + 1}</td>
                                            <td>{bill.customerName}</td>
                                            <td>{bill.tourName}</td>
                                            <td>{bill.price}</td>
                                            <td>
                                                <button
                                                    className={cx('btn-details')}
                                                    onClick={() => handleViewDetails(bill)}
                                                >
                                                    Xem chi tiết
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {selectedBill && (
                        <BillDetailsModal show={showModal} onHide={handleCloseModal} bill={selectedBill} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Bill;
