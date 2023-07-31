function solution(nums) {
    const myMap = new Map();
    for(num of nums) {
        if(!myMap.get(num)){
            myMap.set(num, 1)
        }
    }
    if(nums.length / 2 > myMap.size) {
        return myMap.size
    }
    return nums.length / 2
}