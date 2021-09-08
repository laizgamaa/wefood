import API from '../pages/api/wefood.api'

const RestaurantService = {
    allRestaurants: async() => {
        return API.get('/menu')
    },

    byId: (id) => {
        return API.get(id + '/menu')
    }
}

export default RestaurantService


// import API from 'facul.api'

// const prefix = '/products/pos'

// const CourseService = {
// 	// especializacoes
// 	allGraduations: async () => {
// 		return API.get(prefix + '/market')
// 	},

// 	bySlug: async (slug = '') => {
// 		return API.get(prefix + '/byslug/' + slug)
// 	}
// }

// export default CourseService
