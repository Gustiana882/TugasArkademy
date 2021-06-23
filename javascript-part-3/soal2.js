const getMonth = (callback) => {
    setTimeout(()=>{
        let error = false
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 'September', 
                    'October', 'November', 'December']
        if(!error){
            callback(null, month)
        }else(
            callback(new Error('Sorry data not found!', []))
        )
    }, 4000)
}

getMonth((err, res) => {
    (!err) ? res.map(value => console.log(value)) : console.log(err)
})