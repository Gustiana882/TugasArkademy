const findClosestNum =(array, find) => {
    let data
    array.sort((b, a)=> a-b)
    for (const i in array) {
        if(array[i] <= find){
            console.log(array[i])
            break
        }
    }
}

findClosestNum([1,2,4,5,7,8,34,6,7,], 12)