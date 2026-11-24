function challenge5(text) {
    let wordCount = 0;
    let inWord = false;

    for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ' && !inWord) {
            wordCount++;
            inWord = true;
        } else if (text[i] === ' ') {
            inWord = false;
        }
    }

    return wordCount;
}

console.log(challenge5("hello world"));           
console.log(challenge5("this is the best day"));  
console.log(challenge5("a bb ccc ddddddd e"));    
