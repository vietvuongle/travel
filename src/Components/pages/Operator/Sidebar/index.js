import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <input placeholder="Search" spellCheck={false} />
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={cx('content')}>
                <Link
                    className={cx('content-btn')}
                    to="/operator"
                    //{...props}
                >
                    Quản Lý Khách Hàng
                </Link>
                <p className={cx('content-btn')}>Quản Lý Hóa Đơn</p>
                <Link className={cx('content-btn')} to="/tour">
                    Quản Lý Tour
                </Link>

                <p className={cx('content-btn')}>Quản Lý Tỉnh Thành</p>
                <Link className={cx('content-btn')} to="/place">
                    Quản Lý Địa Điểm
                </Link>
                <Link className={cx('content-btn')} to="/vehicle">
                    Quản Lý Dịch Vụ
                </Link>
                <p className={cx('content-btn')}>Quản Lý Khách Sạn</p>
                <p className={cx('content-btn')}>Quản Lý Đánh Giá</p>
                <p className={cx('content-btn')}>Quản Lý Quốc Tịch</p>
                <p className={cx('content-btn')}>Quản Lý Cấu Hình</p>
                <p className={cx('content-btn')}>Đăng Xuất</p>
            </div>
        </div>
    );
}

export default Sidebar;
