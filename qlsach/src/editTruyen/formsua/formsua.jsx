import axios from 'axios';
import './formsua.css'
import React, { useEffect, useState } from 'react';

const FormSua = ({ onClose,onSubmit,truyenData }) => {
  const [tenSach, setTenSach] = useState('');
  const [tenTacGia, setTenTacGia] = useState('');
  const [photos, setPhotos] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (truyenData) {
      setTenSach(truyenData.tenSach || '');
      setTenTacGia(truyenData.tenTacGia || '');
      setPhotos(truyenData.photos || '');
      setDescription(truyenData.description || '');
    }
  }, [truyenData]);

  const editTruyen = () => {
    const data = {
      tenSach,
      tenTacGia,
      photos,
      description
    }
    onSubmit(data);
  }

  const submit = () => {
    editTruyen();
    
    onClose();
  };

  return (
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
        <button onClick={submit}>Lưu</button>
      </div>
    </div>
  );
};

export default FormSua;