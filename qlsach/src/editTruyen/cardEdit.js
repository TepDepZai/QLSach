import axios from 'axios';
import './cardEdit.css';
import { SquarePen, Trash2 } from 'lucide-react';
import FormSua from './formsua/formsua';
import { useState } from 'react';

const CardEdit = ({ title, img, id, tenTacGia, description }) => {
    const [showEditForm, setShowEditForm] = useState(false);

    const handleEdit = () => {
        setShowEditForm(true);
    };

    const handleSubmitEdit = async (data) => {
        await axios.put(`/edittruyen/${id}`, data);
        setShowEditForm(false);
    };

    const deleteTruyen = async (id) => {
        await axios.delete(`/deletetruyen/${id}`);
    };

    return (
        <>
            <div className="packetStoryedit">
                <img className="imgedit" src={img} alt={title} />
                <div className="infoEdit">
                    <div className="headerEdit">
                        <h3 className="titleStoryEdit">{title}</h3>
                        <div className="actionBtns">
                            <button onClick={() => deleteTruyen(id)}>
                                <Trash2 className="btn_edit_delete" />
                            </button>
                            <button onClick={handleEdit}>
                                <SquarePen className="btn_edit_edit" />
                            </button>
                        </div>
                    </div>
                    <h4 className="TenTacGiaStoryEdit">Author: {tenTacGia}</h4>
                    <p className="DescriptionStoryEdit">Description: {description}</p>
                </div>
            </div>

            {showEditForm && (
                <FormSua
                    onClose={() => setShowEditForm(false)}
                    onSubmit={handleSubmitEdit}
                    truyenData={{
                        tenSach: title,
                        photos: img,
                        tenTacGia: tenTacGia,
                        description: description
                    }}
                />
            )}
        </>
    );
};

export default CardEdit;
