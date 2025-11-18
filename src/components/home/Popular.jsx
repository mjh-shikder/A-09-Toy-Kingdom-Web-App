import React from 'react';
import Card from '../Card';

const Popular = ({ popularData }) => {
    
    
    
    return (
        <div>
            <h1 className='text-4xl text-center font-semibold text-primary hover:text-secondary '>Popular Toys</h1>
            {
                popularData.map(card=><Card card={card}></Card>)
            }
        </div>
    );
};

export default Popular;