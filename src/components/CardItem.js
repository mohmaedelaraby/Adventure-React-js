import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

function CardItem({img , title , path,label}) {
    return (
        <>
        <li className='card_item'>
            <Link to={path} className='card_item-link'>
                <figure className='card_item_pic_wrab' data-category={label}>
                    <img className='card_item_img' src={img} alt='travel image' />
                </figure>
                <div className='card_item_info'>
                    <h5 className='card_item_text'>
                        {title}
                    </h5>
                </div>
            </Link>
        </li>
            
        </>
    )
}

export default CardItem
