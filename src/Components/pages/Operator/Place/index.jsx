import styles from './Place.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const cx = classNames.bind(styles);

function Place() {
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
                            <h2>Quản Lý Địa Điểm</h2>
                            <div className={cx('mb-4')}>
                                <label className={cx('block')}>Tên Địa Điểm</label>
                                <input type="text" className={cx('input-border')} />
                            </div>
                            <div className={cx('mb-4')}>
                                <label className={cx('block')}>ID Tỉnh Thành</label>
                                <select className={cx('input-border')}>
                                    <option></option>
                                </select>
                            </div>
                            <div className={cx('mb-4')}>
                                <label className={cx('block')}>Thông Tin</label>
                                <input type="text" className={cx('input-border')} />
                            </div>
                            <div className={cx('mb-4')}>
                                <label className={cx('block')}>Hình Ảnh</label>
                                <input type="file" />
                            </div>
                        </div>

                        <div className={cx('content-header')}>
                            <h2>Danh Sách Tour</h2>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className={cx('table-header')}>Tên Địa Điểm</th>
                                        <th>ID Tỉnh Thành</th>
                                        <th>Thông Tin</th>
                                        <th>ID Khách Sạn</th>
                                        <th>Hình ảnh</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Nha Trang</th>
                                        <th>Nha Trang</th>
                                        <th>more</th>
                                        <th>Mường Thanh</th>
                                        <th>more</th>
                                    </tr>
                                    <tr>
                                        <th>Nha Trang</th>
                                        <th>Nha Trang</th>
                                        <th>more</th>
                                        <th>Mường Thanh</th>
                                        <th>more</th>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Place;
