function submit(){

    // ambil input nilai bahasa indonesia
    let nilaiIndonesia = document.getElementById('indonesia').value

    // ambil input nilai bahasa inggris
    let nilaiInggris = document.getElementById('inggris').value

    // ambil input nilai matematika
    let nilaiMatematika = document.getElementById('matematika').value

    // ambil input nilai ipa
    let nilaiIpa = document.getElementById('ipa').value


    // percabangan untuk validasi data yang masuk

    if(!nilaiIndonesia){            //jika validasi sama dengan false
        alert('nilai bahasa indonesia tidak boleh kosong')
    }
    else if(!nilaiInggris){         //jika validasi sama dengan false
        alert('nilai bahasa inggris tidak boleh kosong')
    }
    else if(!nilaiMatematika){      //jika validasi sama dengan false
        alert('nilai matematika tidak boleh kosong')
    }
    else if(!nilaiIpa){             //jika validasi sama dengan false
        alert('nilai IPA tidak boleh kosong')
    }
    else{    
        /*
            jika validasi sama dengan true maka hitung nilai rata-rata

            rumus : nilai rata-rata = total nilai/banyak data

            konversi nilai input ke integer terlebih dahulu
        */

        
        nIndo = parseInt(nilaiIndonesia)
        nIng = parseInt(nilaiInggris)
        nMatc = parseInt(nilaiMatematika)
        nIpa = parseInt(nilaiIpa)
        
        
        // hitung nilai rata-rata
        let rataRata = (nIndo + nIng + nMatc + nIpa)/4
        
        // tampilkan hasil perhitungan
        document.getElementById('rata-rata').innerHTML = `<h3>Rata-Rata : ${rataRata}</h3>`


        // percabangan untuk menentukan grade
        if(rataRata >= 0 && rataRata < 60){                 // jika nila 0-59 maka grade E
            document.getElementById('grade').innerHTML = "<h3>Grade : E</h3>"
        }
        else if(rataRata >=60 && rataRata < 70){            // jika nila 60-69 maka grade D
            document.getElementById('grade').innerHTML = "<h3>Grade : D</h3>"
        }
        else if(rataRata >=70 && rataRata < 80){            // jika nila 70-79 maka grade C
            document.getElementById('grade').innerHTML = "<h3>Grade : C</h3>"
        }
        else if(rataRata >= 80 && rataRata < 90){           // jika nila 80-89 maka grade B
            document.getElementById('grade').innerHTML = "<h3>Grade : B</h3>"
        }
        else if(rataRata >= 90 && rataRata <= 100){         // jika nila 90-100 maka grade A
            document.getElementById('grade').innerHTML = "<h3>Grade : A</h3>"
        }
        else{
            document.getElementById('grade').innerHTML = "<h3>Grade : Nilai melebihi ketentuan!</h3>"
        }

        
    }

}