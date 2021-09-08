import styles from '../styles/components/Restaurant.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export function Restaurants({ restaurants }) {
    return(
        <div className={styles.restaurantContainer}>
            {restaurants.map((restaurant) => (
                <Link as={`/${restaurant.id}`} href="/[restaurant]" key={restaurant.id}>
                    <a className={styles.singleRestaurant}>
                        <Image
                            src={restaurant.image}
                            alt="Logo Restaurant"
                            width={120}
                            height={90}
                        />

                        <div className={styles.info}>
                            <p>{restaurant.name}</p>
                            <span>{restaurant.address}</span>
                        </div>
                    </a>
                </Link>
            ))}    
           

            {/* <Link href="/">
                <a className={styles.singleRestaurant}>
                    <Image 
                        src="/place-logo.png"
                        alt="Logo Restaurant"
                        width={90}
                        height={90}
                    />

                    <div className={styles.info}>
                        <p>Nome do restaurante</p>
                        <span>Endereço do restaurante</span>
                    </div>
                </a>
            </Link>
            
            <Link href="/">
                <a className={styles.singleRestaurant}>
                    <Image 
                        src="/place-logo.png"
                        alt="Logo Restaurant"
                        width={90}
                        height={90}
                    />

                    <div className={styles.info}>
                        <p>Nome do restaurante</p>
                        <span>Endereço do restaurante</span>
                    </div>
                </a>
            </Link> */}
        </div>
    )
}