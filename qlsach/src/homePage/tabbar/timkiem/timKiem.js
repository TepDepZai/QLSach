import { useState } from 'react';
import './timkiem.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TimKiem = ({ onClose }) => {
  const [tenSach, setTenSach] = useState('');

  const submit = () => {
    goToTimKiem();
    onClose();
  };
  

  const navigate = useNavigate();

  const goToTimKiem = () => {
    navigate(`/timkiem/${tenSach}`);
  };

  return (
    <div className='over-layer'>
      <div className="khung">
        <div className="khung2">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Nhập tên sách cần tìm</h2>
          <input
            placeholder="Tên sách"
            onChange={(e) => setTenSach(e.target.value)}
          />
          <button className='btn_tim' onClick={submit}>Tìm</button>
        </div>
      </div>
    </div>
  );
};

export default TimKiem;
