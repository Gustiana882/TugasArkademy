
const getApi = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        let json = await response.json()

        for (const key in json) {
            console.log(json[key].name)
        }
        
    } catch (error) {
        console.log(error)
    }
}

getApi()