import { Cart } from '../Cart'
import { Products } from '../Products'

import styles from './styles.module.scss'

export const Home = () => {
    return (
        <div className={styles.home}>
            <Cart />
            <Products />
        </div>
    )
}
