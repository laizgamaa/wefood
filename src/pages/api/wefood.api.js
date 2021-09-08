const headers = new Headers({
	'Content-Type': 'application/json',
})

const url = 'http://challange.goomer.com.br/restaurants'

const API = {
    get: async () => {
		const method = "GET" 
        try {
            const response = await fetch(url, { method })
            return await response.json()
        } catch (err) {
            console.log({ error: err, url: url })
            return null
        }
	},
}

export default API