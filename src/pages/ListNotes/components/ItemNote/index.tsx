import { FC } from "react";
import "./ItemNoteStyle.css"
interface ItemProps {
    title: string;
    note: string;
}

const ItemNote:FC<ItemProps> = (props) => {
    const {title, note} = props;
    return (
        <div className="list-notes-item">
            <p className="list-notes-item__title">{title}</p>
            <p className="list-notes-item__text">{note}</p>
        </div>
    )
}

export default ItemNote;