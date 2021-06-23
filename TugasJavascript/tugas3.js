function tugas3(){

// ambil input user
let printSegitiga = document.getElementById('segitiga').value

// validasi input
if(printSegitiga == false){
    alert('Nomor tidak boleh kosong')
}
else if(printSegitiga.match(/[a-zA-Z]/) != null){
    //console.log(printSegitiga.match(/[a-zA-Z]/))
    alert('input harus number')

}
else{

    let len = parseInt(printSegitiga)

    let h =''
    for(let y=0; y <= len; y++){            // horizontal

        let v =''
        for(let x=1; x <= (len-y); x++){    // vertikal
            v+=`${x} `
        }

        h+=`${v}<br>`
        console.log(v)
    }
    document.getElementById('root').innerHTML = h
}


}