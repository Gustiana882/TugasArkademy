const cekApi = async (key) => {
    try {
        let getApi = await fetch('https://reqres.in/api/users/4')
        let object = await getApi.json()
        
        let {id, email, first_name, last_name, avatar} = object.data
        if( id == key.id && 
            email == key.email && 
            first_name == key.first_name && 
            last_name == key.last_name && 
            avatar == key.avatar
            ){
            console.log('true')
        }
        else{
            console.log('false')
        }
    } catch (error) {
        console.log(error)
    }
}

let data = {
    id: 4,
    email: "astrowarden@moba.ml",
    first_name: "Yve",
    last_name: "astrowarden",
    avatar: "https://reqres.in/",
    }

let data2 = {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg"
    }
    
cekApi(data2)