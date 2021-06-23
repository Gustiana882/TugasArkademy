const stokBarang = (inputNama) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let data = [
                {nama : 'aqua', stok : 10},
                {nama : 'coca-cola', stok : 5},
                {nama : 'sprit', stok : 4},
                {nama : 'lemineral', stok : 0},
                {nama : 'greentea', stok : 1},
                {nama : 'tehpucuk', stok : 0},
            ]

            data.map((data)=>{
                if(data.nama == inputNama){
                    return resolve(data)
                }
            })

            reject('Barang tidak ada')

        }, 1000)
    })
}

const cekBarang = async (namaBarang) =>{
    try {
        const barang = await stokBarang(namaBarang)
        console.log(`nama : ${barang.nama}\nstok : ${(barang.stok < 1)? 'Stok habis':barang.stok}`)
    } catch (error) {
        console.log(error)
    }
}

cekBarang('lemineral')




const cariBuku = (namaBuku) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let dataBuku = ['novel', 'komik', 'cerpen', 'kamus', 'matematika', 'ipa']
            dataBuku.find((value)=>{
                if(value == namaBuku){
                    return resolve(value)
                }
            })
            reject('Buku yang dicari tidak ada')
        }, 1000)
    })
}

cariBuku('komik')
    .then((response)=>{
        console.log(response)
    })
    .catch((error)=> console.log(error))