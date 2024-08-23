import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../../../TrangChu/Navbar/Navbar';
import Footer from '../../../TrangChu/Footer/Footer';

import './Destinate.css';
import img1 from '../../../../Assets/img(1).webp';
import img2 from '../../../../Assets/img(2).webp';
import img3 from '../../../../Assets/img(3).webp';
import img4 from '../../../../Assets/img(4).webp';
import img5 from '../../../../Assets/img(5).webp';
import img6 from '../../../../Assets/img(6).webp';
import img7 from '../../../../Assets/img(7).webp';
import img8 from '../../../../Assets/img(8).webp';
import img9 from '../../../../Assets/img(9).webp';
import img10 from '../../../../Assets/img(10).webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';


const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Lăng Minh Mạng',
        location: 'Hương Thọ, Hương Trà',
        grade: 'Di tích lịch sử',
        fees: '700.000',
        description: 'Lăng Minh Mạng Huế gây ấn tượng với kiến trúc truyền thống cổ xưa, mang đậm bản sắc Nho Giáo. Đây là điểm đến hấp dẫn mà du khách không nên bỏ lỡ trong hành trình về thăm cố đô để chiêm ngưỡng nghệ thuật kiến trúc lăng tẩm và hiểu hơn về các giai đoạn lịch sử quan trọng của đất nước.'
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Biển Thuận An',
        location: 'Thị trấn Thuận An',
        grade: 'Bãi biển',
        fees: '500.000',
        description: 'Là một trong những bãi biển đẹp nhất tại Huế, bãi biển Thuận An thu hút khách du lịch bởi vẻ hoang sơ với bờ cát trắng mịn trải dài và làn nước biển trong xanh. Đây là điểm đến lý tưởng cho du khách tận hưởng không gian mát lạnh, yên bình của biển cả.'
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Biển Cảnh Dương',
        location: 'Lộc Vĩnh, Phú Lộc',
        grade: 'Bãi biển',
        fees: '650.000',
        description: 'Biển Cảnh Dương đủ gần để hội tụ mọi dịch vụ du lịch biển sôi động và đủ xa để du khách đi trốn khỏi sự xô bồ, đông đúc của thành phố. Du khách đến đây ngoài tắm biển, thưởng thức hải sản còn có cơ hội tham gia vô số trò vui chơi, giải trí thú vị hoặc cắm trại qua đêm bên bờ biển.'
    },

    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Cung An Định',
        location: 'Thành Phố Huế',
        grade: 'Di tích lịch sử',
        fees: '350.000',
        description: 'Một trong những cung điện của triều Nguyễn với kiến trúc độc đáo, kết hợp giữa phong cách Việt và Pháp.'
    },

    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Biển Lăng Cô',
        location: 'Thị trấn Lăng Cô',
        grade: 'Bãi biển',
        fees: '700.000',
        description: 'Bãi biển hoang sơ với cát trắng mịn và nước biển trong xanh, lý tưởng cho nghỉ dưỡng..'
    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Đại Nội Huế',
        location: 'Đường 23/08 Thành Phố Huế',
        grade: 'Di tích lịch sử',
        fees: '500.000',
        description: 'Khu di tích lịch sử lớn nhất của triều Nguyễn, bao gồm các cung điện, đền thờ và các công trình khác.'
    },

    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Chùa Thiên Mụ',
        location: 'Hương Long, Thành Phố Huế',
        grade: 'Di tích văn hóa',
        fees: '400.000',
        description: 'Ngôi chùa nổi tiếng với tháp Phước Duyên, nằm bên bờ sông Hương, là biểu tượng của Huế.'
    },

    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Lăng Tự Đức',
        location: 'Xuân Thủy, Thành Phố Huế',
        grade: 'Di tích lịch sử',
        fees: '700.000',
        description: 'Lăng mộ của vua Tự Đức với kiến trúc thanh bình, hòa quyện cùng thiên nhiên.'
    },

    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Suối Khe Su',
        location: 'Lộc Hòa, Phú lộc',
        grade: 'Du lịch',
        fees: '600.000',
        description: ' Suối nước mát lạnh, nằm giữa rừng cây xanh mướt, điểm đến lý tưởng để thư giãn.'
    },

    {
        id: 10,
        imgSrc: img10,
        destTitle: 'Thác Nhị Hồ',
        location: 'Lộc Trì, Phú lộc',
        grade: 'Du lịch',
        fees: '550.000',
        description: ' Thác nước hai tầng đẹp mê hồn, với dòng nước trong vắt chảy giữa rừng núi.'
    },
]

const Destinate = () => {

    const listLocation = [
        { image: img5, location: "Phú Lộc" },
        { image: img1, location: "Hương Trà" },
        { image: img2, location: "Thuận An" },
        { image: img6, location: "Thành phố Huế" },
        { image: img5, location: "Lăng Cô" },
    ];

    const locationList = ["phú lộc", "huế", "lăng cô", "thuận an", "hương trà"];

    const countDestinationsByLocation = (data) => {
        const locationCount = {};

        data.forEach(item => {
            const location = item.location.toLowerCase();
            locationList.forEach(loc => {
                if (location.includes(loc)) {
                    if (locationCount[loc]) {
                        locationCount[loc]++;
                    } else {
                        locationCount[loc] = 1;
                    }
                }
            });
        });

        return locationCount;
    };

    // const [currentSlide, setCurrentSlide] = useState(0);
    const [locationCount, setLocationCount] = useState({});

    useEffect(() => {
        setLocationCount(countDestinationsByLocation(Data));
    }, []);

    return (
        <div>
            <Navbar />

            {/* start slider */}
            <div className='slider'>
                <div className='slider-overlay'></div>
                <div className='slider-title'>
                    <h5 className='slider-content-sub'>A Journey of a Lifetime!</h5>
                    <h3 className='slider-content'>Experience the Magic of Thua Thien Hue </h3>
                    <a className='slider-button'>Explore Tours <FontAwesomeIcon icon={faArrowRightLong} /></a>
                </div>
            </div>
            {/* start slider */}

            <div className='des-container'>
                {/* start tiêu đề ảnh destination khác */}
                <div className='des-other-title'>
                    <div className='des-Other-content'>
                        <div className='grey-qo-regular des-Other-1'>
                            <h3 className='grey-qo-regular'>For You</h3>
                        </div>
                        <div className='des-Other-2'>
                            <h1 className='des-orther-2-title'>Explore Destinations</h1>
                        </div>
                    </div>
                </div>
                {/* end tiêu đề destination khác */}

                {/* start image destination khác */}
                <div className='des-image'>
                    {listLocation.map((img, index) => (
                        <div className='des-item' key={index}>
                            <div className='image-wrapper'>
                                <img src={img.image} alt={img.location} />
                                <div className="overlay"></div>
                            </div>
                            <div className='card-title'>
                                <h4>{img.location}</h4>
                            </div>
                            <div className='card-content'>
                                <h5 className='card-content-location'>{img.location}</h5>
                                <span className="count-label">
                                    Tours: {locationCount[locationList.find(loc => img.location.toLowerCase().includes(loc))] || 0}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* end image destination khác */}
            </div>

            <Footer />
        </div>
    );
};

export default Destinate;