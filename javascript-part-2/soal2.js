
function printNama(props, find){
    let array = []

    if(find == 'all'){

        console.log(`hasil ditemukan total ${props.length} data : ${props}`)

    }
    else if(find >= props.length){

        console.log(`hasil ditemukan total ${props.length} data : ${props}`)

    }
    else{

        for(let i=0; i<find ;i++){
            array.push(props[i])
        }

        console.log(`tampilkan ${find} data saja dari ${props.length} : ${array}`)
    }
}


function searchName(value, find = 'all', callback){
    if(!value){
        console.log('Input cari tidak boleh kosong')
    }
    else if(find != 'all' && typeof(find) != 'number'){
        console.log('Input banyak data harus number')
    }
    else{
        let array = []
        const dataBase = [
            'Abigail', 'Alexandra', 'Alison',
            'Amanda', 'Angela', 'Bella',
            'Carol', 'Caroline', 'Carolyn',
            'Deirdre', 'Diana', 'Elizabeth',
            'Ella', 'Faith', 'Olivia', 'Penelope'
        ]

        for (const name of dataBase) {
            if(name.search(value) >= 0){
                array.push(name)
            }
        }
        
        return callback(array, find)
    }

}



/**
 *  input user
 */

let cariData = 'an'
let banyakData


searchName(cariData, banyakData, printNama)
