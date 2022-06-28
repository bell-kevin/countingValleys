function countingValleys(s) {
    let level = [0];
    let count = 0;
    for (let step of s) {
        if (step === "U") {
            level.push(level[level.length - 1] + 1);
            if (level[level.length - 2] < 0 && level[level.length - 1] === 0) count++;
        }
        else if (step === "D") { 
            level.push(level[level.length - 1] - 1);
            if (level[level.length - 2] < 0 && level[level.length - 1] === 0) count++;
        }
    }
    return count;
}
