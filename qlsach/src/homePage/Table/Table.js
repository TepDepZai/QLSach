import { useEffect, useState } from 'react'
import './Table.css'
import Card from './card/Card'
import axios from 'axios'
const Table = () => {
    const [truyen, setTruyen] = useState(null)

    useEffect(() => {
        axios.get("/truyen").then((res) => {
            setTruyen(res.data)
        })
    },[])

    return (
        <div>
           
            <div className='card-main'>
                {truyen && truyen.map(item => <Card key={item._id} title={item.tenSach} img={item.photos} />)}
            </div>

        </div>
    );
}

export default Table;