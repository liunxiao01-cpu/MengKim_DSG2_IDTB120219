function challenge3(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let avg = 0;
    avg = sum / arr.length;
    return avg;
}

console.log(challenge3([85, 90, 78, 92]));
console.log(challenge3([10, 20, 30]));
console.log(challenge3([]));
