/**
 *  soal 1
 *  mengubah data name, email, dan hobby
 */
let data = {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: 
            {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
            },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
    }

let dataSaya ={
    name: "Gustiana",
    email: "gustiana882@gmail.com",
    hobby: ['membaca', 'ngoding']
}

let ubahData = {...data, ...dataSaya}

//console.log(ubahData)



/**
 *  soal 2
 *  mengambil data 'street' dan 'city' menggunakan destructuring
 */


let {street, city} = data.address

console.log(street)
console.log(city)
    