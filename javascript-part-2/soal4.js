
function run(setWaktu){

    const time = setInterval(()=>{
        const waktuTerbaru = new Date().getTime()
        let selisih = setWaktu - waktuTerbaru

        let menit =Math.floor(selisih / (1000*60))
        let detik =Math.floor(selisih % (1000*60) / 1000)
        
        if(selisih > 0){
            //console.clear()
            process.stdout.write(`\r${(menit < 10)? `0${menit}` : menit} : ${(detik < 10)? `0${detik}` : detik}`)
        }
        else{
            console.log('\nwaktu habis.')
            return clearInterval(time)
        }
    },1000)
}

function runTimer(set){
    if(typeof(set) == 'number'){
        const waktuMulai = new Date().getTime()
        let setWaktu = (set*60*1000)+waktuMulai+1000
        run(setWaktu)
    }else{
        console.log('set waktu harus number!')
    }

}


runTimer(2)

