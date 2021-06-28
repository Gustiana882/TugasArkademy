// palindrom

const palindrom = (props) => {
    let input = props.toLowerCase()
    let text = input.split('').reverse().join('');
    (text === input) ? console.log('palindrom') : console.log('bukan palindrom');
}

palindrom("Malam")