import React from 'react'
import Product from './Product'

function FavoritesBody({products, removeFavorite}){
    return (
    <div className="favorites-body">
            <div className='upperFav'>
                <h1 className='upperText'>  Vaši omiljeni porizvodi  </h1>
            </div>  
            <div className='favProducts'>
                {products.map((product)=>(
                <Product product={product} key={product.id} removeFavorite={removeFavorite}/>
                ))}
            </div>
    </div>

    )
}

export default FavoritesBody