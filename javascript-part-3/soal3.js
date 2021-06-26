
const karakterAngka = () => {
    let number = Math.floor(Math.random()*10000)
    return number.toString()
}

const karakterUp = (string) => {
    // index = 2
    // c => C
    // 01 2 345
    // ab|c|def
    // data = ab + C + def
    let index = Math.floor(Math.random()*string.length)
    let data = string.substr(0, index) + string[index].toUpperCase() + string.substr(index+1, string.length)
    return data
}

const spesialKarakter = (string) =>{
    let char = '@!$%&+|'
    let index = Math.floor(Math.random()*string.length)
    return string.substr(0, index) + char[Math.floor(Math.random()*char.length)] + string.substr(index, string.length)
}




const generate = (password, level) => {
    if(password.length < 8){
        return console.log('panjang password minimal 8 huruf')
    }
    switch(level){
        case 'low':
            let low = password+karakterAngka()
            console.log(low)
            break
        case 'good':
            let good = karakterUp(password)+karakterAngka()
            console.log(good)
            break
        case 'strong':
            // Abcd1@234
            let strong = karakterUp(password)+spesialKarakter(karakterAngka())
            console.log(strong)
            break
            
        default:
            console.log('eror')
    }

}

generate('gustiana', 'strong')