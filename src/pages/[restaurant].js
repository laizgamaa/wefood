import { useRouter } from "next/router";

import RestaurantService from '../services/restaurant.service'

export default function Restaurant({ restaurant }) {
    console.log(restaurant);

    const router = useRouter();

    return(
        <>
          <p>nome{restaurant.name}</p>
        
        </>
    )
}

export async function getStaticPaths() {
	const restaurants = await RestaurantService.allRestaurants()

	return {
		paths: [
			'/restaurante-menu'
		],
		fallback: true,
	}
}

export async function getStaticProps() {
	const restaurants = await RestaurantService.byId();
	return {
		props: {
            restaurants
		},
		revalidate: 10
	}
}
  