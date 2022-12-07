import { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import styles from './styles.module.scss'

export const ItemCart = ({item}) => {

    const { addItemToCart, deleteItemToCart } = useContext(CartContext);
    const { id } = item;

    return (
        <div className={styles.cartItem}>
            <img src={item.img} alt={item.name} />
            <div className={styles.dataContainer}>
                <div className={styles.left}>
                    <p>{item.name}</p>
                    <div className={styles.buttons}>
                        {
                            item.stock > 0 ?
                            <button className='btnPrimary' onClick={() => addItemToCart( item )}>Agregar</button>
                            :
                            <button className={styles.stock}>Sin stock</button>
                        }
                        <button className='btnDanger' onClick={() => deleteItemToCart( item )}>Eliminar</button>
                    </div>
                </div>
                <div className={styles.right}>
                    <div>
                        { item.amount }
                    </div>
                        <p>${(item.amount * item.price).toLocaleString('en')}</p>
                </div>
            </div>
        </div>
    )
}
