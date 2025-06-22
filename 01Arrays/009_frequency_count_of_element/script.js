//  Frequency of Elements

const arr = [1,2,2,3,4,4];
const freq = {}

for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (freq[value]) {
        freq[value]++;
    }else {
        freq[value] = 1;
    }
    
}
console.log("frequencies are: ",freq)