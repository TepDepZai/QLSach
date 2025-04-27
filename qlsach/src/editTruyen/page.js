import axios from "axios";
import CardEdit from "./cardEdit";
import { useEffect, useState } from "react";
import Pagination from "../homePage/tabbar/Pagination/Pagination";

import './pageEdit.css';

const EditTruyenPage = () => {
    const [truyen, setTruyen] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        axios.get("/truyen").then((res) => {
            setTruyen(res.data);
        });
    }, []);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = truyen.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="main-Edit">
            <div><h2 className='title-table'>Danh Mục Sách</h2></div>
            <div className='cardEdit-main'>
                {currentItems.map(item => (
                    <CardEdit
                        key={item._id}
                        title={item.tenSach}
                        img={item.photos}
                        id={item._id}
                        tenTacGia={item.tenTacGia}
                        description={item.description}
                    />
                ))}
            </div>
            <div>
                <Pagination
                    totalPages={Math.ceil(truyen.length / itemsPerPage)}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />

            </div>
        </div>
    );
};

export default EditTruyenPage;
