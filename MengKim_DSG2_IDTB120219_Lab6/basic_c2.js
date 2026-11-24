function challenge2(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}

console.log(challenge2([14,15,16,20]));
console.log(challenge2([5,4,3,2,1]));
console.log(challenge2([]));

