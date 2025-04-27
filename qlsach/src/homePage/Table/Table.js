import { useEffect, useState } from 'react';
import './Table.css';
import Card from './card/Card';
import axios from 'axios';
import Pagination from '../tabbar/Pagination/Pagination';

const Table = () => {
    const [truyen, setTruyen] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
    useEffect(() => {
        const fetchTruyen = async () => {
            try {
                const res = await axios.get('/truyen');
                setTruyen(res.data);
            } catch (error) {
                console.error('Lỗi:', error);
            }
        };
        fetchTruyen();
    }, []);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = truyen.slice(indexOfFirstItem, indexOfLastItem);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="card-main">
            {currentItems.length > 0 ? (
                currentItems.map((item) => (
                    <Card
                        key={item._id}
                        title={item.tenSach}
                        img={item.photos}
                        TacGia={item.tenTacGia}
                    />
                ))
            ) : (
                <p>Đang tải dữ liệu</p>
            )}
            <div className='Pg-gps-main'>
                <Pagination
                    totalPages={Math.ceil(truyen.length / itemsPerPage)} 
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default Table;
