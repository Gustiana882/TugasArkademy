const divideAndSort = (number) => {
    let hasil='';
    let arrNumber = number.split('0')
    
    for (const key in arrNumber) {
        let splitArr = arrNumber[key].split('')
        splitArr.sort((a,b)=>a-b)
        let joinArr = splitArr.join('')
        
        hasil += joinArr
    }
    console.log(hasil)
}


divideAndSort("65432072534012129")