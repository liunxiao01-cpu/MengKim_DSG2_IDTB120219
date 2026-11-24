function challenge6(votes) {
    if (votes.length === 0) {
        return "There is not vote yet";
    }

    let countA = 0;
    let countB = 0;
    let countC = 0;

    for (let i = 0; i < votes.length; i++) {
        if (votes[i] === 'A') {
            countA++;
        } else if (votes[i] === 'B') {
            countB++;
        } else if (votes[i] === 'C') {
            countC++;
        }
    }

    if (countA === countB && countB === countC) {
        return "A, B, and C are all winners";
    } 
    else if (countA > countB && countA > countC) {
        return "A is the winner";
    } else if (countB > countA && countB > countC) {
        return "B is the winner";
    } else if (countC > countA && countC > countB) {
        return "C is the winner";
    } 
    else if (countA === countB) {
        return "A and B are both winners";
    } else if (countB === countC) {
        return "B and C are both winners";
    } else if (countA === countC) {
        return "A and C are both winners";
    }
}

console.log(challenge6(['A', 'B', 'A', 'C', 'A'])); 
console.log(challenge6(['A', 'B', 'B', 'C', 'A'])); 
console.log(challenge6([]));                        
