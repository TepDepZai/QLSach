import './card.css'
const Card = ({title, img}) => {
    return (
        <div className="packetStory">
            <img className='img' src = {img}/>
            <div className='titleStorydad'>
            <h3 className='titleStory'>{title}</h3>
            </div>
        </div>
    );
}
export default Card;