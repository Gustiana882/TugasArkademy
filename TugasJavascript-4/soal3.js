//

const name = [
    "Abigail", "Alexandra", "Fatih",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "fatih",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope",
    "Diani", "fatih", "carol", "fatih", "Faith"
]


const print = (obj) => {
    let sort = obj.sort((b, a) => a.jumlah - b.jumlah)
    //console.log(sort)
    for (const key in sort) {
        if (sort[key].jumlah <= sort[0].jumlah) {
            console.log(sort[key].name)
            break
        }
    }
}


const cari = (name, object) => {
    for (const key in object) {
        if (object[key].name == name.toLowerCase()) {
            return key
        }
    }
    return false
}


const findRepeatName = (arr, callback) => {
    if (arr && arr.length) {
        let obj = []
        for (const key in arr) {
            let name = arr[key].toLowerCase()
            if (!obj.length) {
                let data = {
                    name: name,
                    jumlah: 1
                }
                obj.push(data)
            }
            else if (cari(arr[key], obj)) {
                let id = cari(arr[key], obj)
                obj[id].jumlah += 1
            } else {
                let data = {
                    name: name,
                    jumlah: 1
                }
                obj.push(data)
            }
        }

        return callback(obj)

    } else {
        console.log("array tidak boleh kosong")
    }

}

findRepeatName(name, print)
