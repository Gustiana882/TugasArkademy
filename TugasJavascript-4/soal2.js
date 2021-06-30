const reverseWord = (props) => {
    let text = props.split(' ').reverse().join(' ');
    console.log(text)
}

reverseWord("Saya Belajar Javascript")