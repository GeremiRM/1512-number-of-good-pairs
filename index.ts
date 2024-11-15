function numIdenticalPairs(nums: number[]): number {

    let sum = 0; 

    const digitMaps = new Map<number,number[]>();

    for(let i = 0; i < nums.length; i++) {
        const number = nums[i]; 
        const freq = digitMaps.get(number); 

        if(!freq) {
            digitMaps.set(number, [i]); 
            continue
        } 


        sum+= freq.length; 

        digitMaps.set(number, freq.concat(i)); 
    }

    return sum; 
    
};

console.log(numIdenticalPairs([1,1,1,1]));