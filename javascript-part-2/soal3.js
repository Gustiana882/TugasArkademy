
const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {

    if(nilaiAwal > nilaiAkhir){
        console.log('Nilai akhir harus lebih besar dari nilai awal')
    }
    else if(dataArray.length < 5){
        console.log('Jumlah angka dalam dataArray harus lebih dari 5')
    }
    else{
        let arrayBaru = []
        for (const nilai of dataArray) {
            if(nilai >= nilaiAwal && nilai <= nilaiAkhir){
                arrayBaru.push(nilai)
            }
        }
        
        console.log(arrayBaru.sort((a,b) => a-b))
    }

}





seleksiNilai(3, 20, [2, 25, 17, 4, 14, 30, 8])