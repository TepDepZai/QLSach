import { useEffect, useState } from 'react';
import './tabBar.css'
import FormThem from './Them/formthem';
import TimKiem from './timkiem/timKiem';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination/Pagination';
const TabBar = () => {
    const [them, setThem] = useState (false)
    const [timkiem, setTimKiem] = useState (false)


    const navigate = useNavigate();

  const goToEdit = () => {
    navigate('/editTruyen');
  };

    return (
          <div className='tabbar-khung'>
              <h2 className='title'>Thanh Công Cụ</h2>
              <button className="btn_basic" onClick={() => setThem(!them)}>Thêm</button>
              {them && (<FormThem onClose={() => setThem(!them)}/>)}
              <button className="btn_basic" onClick={goToEdit}>Sửa Truyên</button >
              <button className="btn_basic" onClick={() => setTimKiem(!timkiem)}>Tìm Kiếm</button>
              {timkiem && (<TimKiem onClose={() => setTimKiem(!timkiem)}/>)}
              <Pagination/>
          </div>  
    );
}
export default TabBar;