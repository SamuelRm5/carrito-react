import { ProductsData } from '../../Data/Productos'
import { ItemProduct } from '../ItemProduct'
import styles from './styles.module.scss'

export const Products = () => {

    return (
        <div className={styles.productsContainer}>
            { ProductsData.map((product, i) => (
                <ItemProduct key={i} product={product} />
            )) }
        </div>
    )
}
