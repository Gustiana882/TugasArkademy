const cekKey = (object1, object2) => {
    for (const key1 in object1) {
        let hasil
        for (const key2 in object2) {
            if(key1 == key2){
                hasil = true
                break
            }else{
                hasil = false
            }
        }
        if(!hasil){
            return false
        }
    }
    return true
}

const cekValue = (object1, object2) => {
    for (const key1 in object1) {
        let hasil
        for (const key2 in object2) {
            if(object1[key1] == object2[key2]){
                hasil = true
                break
            }else{
                hasil = false
            }
        }
        if(!hasil){
            return false
        }
    }
    return true
}


const cekApi = async (inputObject) => {
    try {
        let getApi = await fetch('https://reqres.in/api/users/4')
        let object = await getApi.json()
        
        if(cekKey(inputObject, object.data)){
            if(cekValue(inputObject, object.data)) console.log(true)
            else console.log(false)
        }
        else console.log(false)

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
    
cekApi(data)