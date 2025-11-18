import React from 'react';
import Card from '../Card';

const Popular = ({ popularData }) => {
    
    
    
    return (
        <div className='bg-base-100 py-10 rounded-xl'>
            <h1 className='text-4xl text-center font-semibold text-primary hover:text-secondary '>Popular Toys</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 space-y-10 place-items-center  '>
                
                {
                popularData.map(card=><Card card={card} key={card.toyId}></Card>)
                }   
                
            
            </div>
            
        </div>
    );
};

export default Popular;