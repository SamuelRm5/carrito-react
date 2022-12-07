import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../Context/CartContext';

import styles from './styles.module.scss'

export const ItemProduct = ({product}) => {

    const { addItemToCart, completlyRemove, cartItems } = useContext(CartContext);
    const [buttonAdd, setButtonAdd] = useState(false);
    const [inCart, setInCart] = useState([]);

    // TODO - Cambiar boton entre agregar o eliminar
    const handleAdd = item => {

        setButtonAdd( true );
        addItemToCart( item );

    }

    const handleRemove = item => {

        setButtonAdd( false );
        completlyRemove( item );

    }

    useEffect(() => {

        const inCartItem = cartItems.find( item => item.id === product.id );
        if ( inCartItem ) {
            setButtonAdd( true );
        }
        else setButtonAdd( false );

    }, [cartItems])

    return (
        <div className={styles.product}>
            <img src={product.img} alt={product.name} />
            <div>
                <p>
                    {product.name} - ${product.price.toLocaleString('en')}
                </p>
            </div>
            {
                buttonAdd ?
                <button className={styles.danger} onClick={ () => handleRemove( product )}>Remove from cart</button>
                :
                <button className={styles.primary} onClick={ () => handleAdd( product ) }>Add to cart</button>
            }
        </div>
    )
}
