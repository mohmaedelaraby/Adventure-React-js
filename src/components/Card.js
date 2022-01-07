import React from 'react'
import CardItem from './CardItem'
import './Card.css'
import { cards } from '../Data'

function Card() {
    return (
        <div>
            <div className='cards'>
                <h1>CHECK OUT THESE EPIC PLACES</h1>
                <div className='card_container'>
                    <div className='cardS_wrbber'>
                        <ul className='All_cards'>
                            {
                                cards.slice(0,2).map((card)=>(
                                    <CardItem img={card.img} label={card.label} path={card.path} title={card.title}/>
                                ))
                            }
                        </ul>
                        <ul className='All_cards'>
                            {
                                cards.slice(2,5).map((card)=>(
                                    <CardItem img={card.img} label={card.label} path={card.path} title={card.title}/>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Card
