function maxSequence(arr) {
 
    let longestSequence = [];
    let leftMostIndex = 0;
 
 
    for (let i = 0; i < arr.length; i++) {
        currentEl = Number(arr[i]);
        let currentSequence = [currentEl];
 
 
        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = Number(arr[j]);
 
            if (nextEl === currentEl) {
                currentSequence.push(nextEl)
            } else {
                break;
            }
 
        }
 
        if (currentSequence.length > longestSequence.length) {
            longestSequence = [];
            for (let j = 0; j < currentSequence.length; j++) {
                longestSequence.push(currentSequence[j]);
            }
        } else if (currentSequence.length === longestSequence.length) {
            if (i < leftMostIndex) {
                leftmostIndex = i;
            }
        }
    }
    console.log(longestSequence.join(' '));
}
maxSequence([5,5,5,1,1,1,1,1,15,5,6,7,8,8,8])