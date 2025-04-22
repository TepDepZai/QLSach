import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../homePage/Table/card/Card";
import { useParams } from "react-router-dom";


const EditTruyenPage = () => {
    const [truyen, setTruyen] = useState(null)
    const { slug } = useParams();



    useEffect(() => {
        if (slug) {
            TimTruyen(slug);  
        }
    }, [slug]);

    const TimTruyen = async (tenSach) => {
        try {
            const res = await axios.post("/timtruyen/tentruyen", { tenSach });
            setTruyen(res.data);  
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu:", error);
        }
    };
    console.log(truyen?.[0]._id)
    return (
        <div className="main">
            <div> <h2 className='title-table'>Danh Mục Sách</h2>
            </div>
            <div className='card-main'>
                {truyen && truyen.map(item => <Card key={item._id} title={item.tenSach} img={item.photos} id={item._id} tenTacGia={item.tenTacGia} description={item.description}/>)}
            </div>
        </div>
    );
}
export default EditTruyenPage;