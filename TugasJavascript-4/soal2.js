const reverseWord = (props) => {
    let input = props.toLowerCase()
    let text = input.split(' ').reverse().join(' ');
    console.log(text)
}

reverseWord("Saya Belajar Javascript")