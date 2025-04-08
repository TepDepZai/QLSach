import './Table.css'
import Card from'./card/Card'
const Table = () => {
    return (
        <div>
            <div> <h2 className='title-table'>Danh Mục Sách</h2></div>
            <div>
            <Card/>
            </div>

        </div>
    );
}

export default Table;