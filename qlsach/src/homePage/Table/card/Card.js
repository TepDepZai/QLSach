import './card.css';

const Card = ({ title, img, TacGia }) => {
    return (
        <div className="packetStory">
            <img className="img" src={img} alt={title} />
            <div className="titleStorydad">
                <h3 className="titleStory">{title}</h3>
                <h4 className="titleTacGia">{TacGia}</h4>
            </div>
        </div>
    );
};

export default Card;
