import { Restaurants } from "../components/Restaurants";
import styles from '../styles/pages/Home.module.scss'

import RestaurantService from '../services/restaurant.service'

export default function Home({ restaurants = [] }) {
  return (
    <div className={styles.container}>
      <h1>Bem vindo ao Wefood</h1>

      <Restaurants restaurants = {restaurants} />
    </div>
  )
}

export async function getStaticProps() {
	const restaurants = await RestaurantService.allRestaurants();
	return {
		props: {
			restaurants
		},
		revalidate: 10
	}
}