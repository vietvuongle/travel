import { Button, Modal } from 'react-bootstrap';
import './BillDetailsModal.css';
function BillDetailsModal({ show, onHide, bill }) {
    if (!bill) return null;
    const travelSchedule = [
        {
            id: 1,
            address: 'Thái Bình',
            phone: '0912378412',
        },
        {
            id: 2,
            address: 'Hà Nội',
            phone: '0931246576',
        },
    ];

    const travelDetails = travelSchedule.find((schedule) => schedule.id === bill.id);
    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Chi tiết hóa đơn</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="bill">
                    <div className="bill_left">
                        <p>Đơn vị bán hàng: Công ty TNHH du lịch KS88 </p>
                        <p>Mã số thuế: 0123456789 </p>
                        <p>Địa chỉ: 77 Nguyễn Huệ, Phú Nhuận, Thành phố Huế, Thừa Thiên Huế </p>
                        <p>Số điện thoại: 0123456789 </p>
                    </div>
                    <div className="bill_right">
                        <p>Tên khách hàng: {bill.customerName}</p>
                        <p>Địa chỉ: {travelDetails.address}</p>
                        <p>Số điện thoại: {travelDetails.phone}</p>
                    </div>
                </div>
                <div>
                    <p>Tên Tour: {bill.tourName}</p>
                    <p>Giá: {bill.price}</p>
                    <p>Ngày lập hóa đơn: {bill.createdDate}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Đóng
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default BillDetailsModal;
