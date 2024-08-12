import classNames from 'classnames/bind';
import styles from './Tours.module.scss';
import Sidebar from '../Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const cx = classNames.bind(styles);

function Tours() {
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
                        <p>Home</p>
                        <p>Contact</p>
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
                            <h2>Quản Lý Tours</h2>
                            <div className={cx('mb-4')}>
                                <label className={cx('block')}>Tên Tours</label>
                                <input type="text" className={cx('input-border')} />
                            </div>
                            <div className={cx('mb-4')}>
                                <label className={cx('block')}>Mô tả</label>
                                <input type="text" className={cx('input-border')} />
                            </div>
                            <div className={cx('mb-4')}>
                                <label className={cx('block')}>ID Khách Sạn</label>
                                <select className={cx('input-border')}>
                                    <option></option>
                                </select>
                            </div>
                            <div className={cx('mb-4')}>
                                <label className={cx('block')}>List Địa Điểm Tham Quan</label>
                                <input type="text" className={cx('input-border')} />
                            </div>
                            <div className={cx('mb-4')}>
                                <label className={cx('block')}>ID Phương Tiện</label>
                                <select className={cx('input-border')}>
                                    <option></option>
                                </select>
                            </div>

                            <div className={cx('mb-4')}>
                                <label className={cx('block')}>Tỉnh Thành</label>
                                <select className={cx('input-border')}>
                                    <option></option>
                                </select>
                            </div>
                        </div>

                        <div className={cx('content-header')}>
                            <h2>Danh Sách Tour</h2>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tên Tour</th>
                                        <th>Mô Tả</th>
                                        <th>ID Khách Sạn</th>
                                        <th>Địa Điểm Tham Quan</th>
                                        <th>ID Phương Tiện</th>
                                        <th>Tỉnh Thành</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@twitter</td>
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

export default Tours;
