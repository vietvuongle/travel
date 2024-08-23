import classNames from 'classnames/bind';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMapLocationDot,faUsers, faFileInvoice, faLocationDot, faCity, faHotel, faGear, faComments, faFlag, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Img from '../../../../Assets/Logo.png';
const cx = classNames.bind(styles);

function Sidebar() {

    return (
        <div className={cx('wrapper')}>
            <div className={cx('logoDiv')}>
        <a href='#' className={cx('logo', 'flex')}>
            <img src={Img} className={cx('icon', 'logo-img')}/>
            <h2 className={cx('logo-text')}>HueTour</h2>
        </a>
    </div>
            <div className={cx('content')}>
                <Link 
                    className={cx('content-btn')}
                    to='/operator'
                    //{...props}
                    ><FontAwesomeIcon icon={faUsers} />  Quản Lý Khách Hàng
                </Link>
                <p className={cx('content-btn')}><FontAwesomeIcon icon={faFileInvoice} />  Quản Lý Hóa Đơn</p>
                <Link 
                    className={cx('content-btn')}
                    to='/tour'
                    ><FontAwesomeIcon icon={faMapLocationDot} />  Quản Lý Tour
                </Link>
                <Link 
                    className={cx('content-btn')}
                    to='/place'
                    ><FontAwesomeIcon icon={faLocationDot} />  Quản Lý Địa Điểm
                </Link>
                <Link 
                    className={cx('content-btn')}
                    to='/vehicle'
                    ><FontAwesomeIcon icon={faGear} />  Quản Lý Dịch Vụ
                </Link>
                <Link className={cx('content-btn')} to='/hotel'>
                <FontAwesomeIcon icon={faHotel} />  Quản Lý Khách Sạn
                 </Link>
                <p className={cx('content-btn')}><FontAwesomeIcon icon={faComments} />  Quản Lý Đánh Giá</p>
                <p className={cx('content-btn')}><FontAwesomeIcon icon={faCog} />  Quản Lý Cấu Hình</p>
                <p className={cx('content-btn')}><FontAwesomeIcon icon={faSignOutAlt} />  Đăng Xuất</p>
            </div>
        </div>
    );
}

export default Sidebar;
