const cekHariKerja = (day) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}


// cekHariKerja('minggu')
//     .then((res)=>{
//         console.log(`${res} hari ini hari kerja`)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })


const hari = async() =>{
    try {
        const status = await cekHariKerja('senin')
        console.log(`${status} hari ini hari kerja`)
        
    } catch (error) {
        console.log(error)
        
    }
}

hari()