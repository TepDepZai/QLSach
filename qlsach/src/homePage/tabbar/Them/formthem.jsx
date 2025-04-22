import axios from 'axios';
import './formthem.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormThem = ({ onClose }) => {
  const [tenSach, setTenSach] = useState('');
  const [tenTacGia, setTenTacGia] = useState('');
  const [photos, setPhotos] = useState('');
  const [description, setDescription] = useState('');

  const upTruyen = () => {
    const data = {
      tenSach,
      tenTacGia,
      photos,
      description
    }
    axios.post('/uptruyen', data)
  }

  const submit = () => {
    upTruyen();
    onClose();
  };

  return (
    <div className='over-layer'>
      <div className="khung">
        <div className="khung2">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Nhập Thông Tin Sách</h2>
          <input placeholder="Tên sách" value={tenSach} onChange={e => setTenSach(e.target.value)} />
          <input placeholder="Tác giả" value={tenTacGia} onChange={e => setTenTacGia(e.target.value)} />
          <input placeholder="Mô Tả" value={description} onChange={e => setDescription(e.target.value)} />
          <label>Chọn hình ảnh bìa:</label>
          <input placeholder="URL hình ảnh" value={photos} onChange={e => setPhotos(e.target.value)} />
          {photos && <img src={photos} alt="Xem trước" style={{ width: '100px', marginTop: '10px' }} />}
          <button className='btn_luu' onClick={submit}>Lưu</button>
        </div>
      </div>
    </div>
  );
};

export default FormThem;