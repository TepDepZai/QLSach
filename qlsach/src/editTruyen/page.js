import axios from "axios";
import Card from "../homePage/Table/card/Card";
import { useEffect, useState } from "react";
import CardEdit from "./cardEdit";
import './pageEdit.css'
const EditTruyenPage = () => {
    const [truyen, setTruyen] = useState(null)

    useEffect(() => {
        axios.get("/truyen").then((res) => {
            setTruyen(res.data)
        })
    }, [])
    
    console.log(truyen?.[0]._id)
    return (
        <div className="main-Edit">
            <div> <h2 className='title-table'>Danh Mục Sách</h2>
            </div>
            <div className='cardEdit-main'>
                {truyen && truyen.map(item => <CardEdit key={item._id} title={item.tenSach} img={item.photos} id={item._id} tenTacGia={item.tenTacGia} description={item.description}/>)}
            </div>
        </div>
    );
}

export default EditTruyenPage;