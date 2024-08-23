import Navbar from '../../../TrangChu/Navbar/Navbar';
import Footer from '../../../TrangChu/Footer/Footer';
import { useState } from 'react';
import './TourDetailUser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faPinterest } from '@fortawesome/free-brands-svg-icons';

import image from './252966438_312550877366493_4914270733333909192_n.jpg';

const TourDetailUser = () => {
  const [activeTab, setActiveTab] = useState('MoTaChiTiet');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Navbar />
      <div className='Container'>
        <div className='content'>
          <img src={image} alt="" />
          <div className='content-right'>
            <h4>Tour du lịch Hà Nội 3 ngày 2 đêm</h4>
            <div className='title'>
              <p>Giá vé Người Lớn: 3.670.000 VND</p>
              <p>Giá vé Trẻ Em: 3.150.000 VND</p>
              <p>Ngày Khởi Hành: 31/12/2023</p>
            </div>
            <div className="social-icons">
              <a href="#"><FontAwesomeIcon icon={faFacebook} className='Facebook' /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} className='Twitter' /></a>
              <a href="#"><FontAwesomeIcon icon={faGoogle} className='Google' /></a>
              <a href="#"><FontAwesomeIcon icon={faPinterest} className='Pinterest' /></a>
            </div>
            <div className="ticket-quantity">
              <label>Số lượng vé người lớn: </label>
              <input type="number" min="0" defaultValue={0} /><br />
              <label>Số lượng vé trẻ em: </label>
              <input type="number" min="0" defaultValue={0} />
            </div>
            <button className="add-to-cart">ADD TO CART</button>
          </div>
        </div>
        <div className="tabs">
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === 'MoTaChiTiet' ? 'active' : ''}`}
              onClick={() => handleTabClick('MoTaChiTiet')}
            >
              Mô Tả Chi Tiết
            </button>
            <button
              className={`tab-button ${activeTab === 'ThongTinChiTiet' ? 'active' : ''}`}
              onClick={() => handleTabClick('ThongTinChiTiet')}
            >
              Thông tin chi tiết
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'MoTaChiTiet' && (
              <div className="description">
                <p>
                  Ngày 1: Khám Phá Văn Miếu - Quốc Tử Giám và Lăng Chủ Tịch Sáng: 8:00 AM: Thăm Văn Miếu - Quốc Tử Giám, di tích văn hóa lịch sử lớn của Hà Nội.
                  Trưa: 12:00 PM: Dùng trưa tại một nhà hàng gần khu vực Văn Miếu. Chiều: 2:00 PM: Thăm Lăng Chủ Tịch, nơi lưu giữ còn nguyên thi hài của Chủ tịch Hồ Chí Minh.
                  Tối: 7:00 PM: Dùng tối tại một nhà hàng trung tâm Hà Nội. Ngày 2: Chùa Một Cột, Nhà Thờ Hà Nội và Nhà Tù Hỏa Lòa Sáng: 9:00 AM: Ghé Chùa Một Cột, một công trình kiến trúc độc đáo và quan trọng văn hóa.
                  Trưa: 12:00 PM: Dùng trưa tại khu vực quanh chùa. Chiều: 2:00 PM: Thăm Nhà Thờ Hà Nội với kiến trúc tuyệt vời. Tối: 7:00 PM: Dùng tối tại một nhà hàng địa phương.
                </p>
              </div>
            )}
            {activeTab === 'ThongTinChiTiet' && (
              <div className="description">
                <p>
                  Thông tin chi tiết về tour du lịch, bao gồm các điểm tham quan, lịch trình, dịch vụ đi kèm, và các lưu ý khác.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TourDetailUser;