function solution(clothes) {
    const myMap = new Map();
    let number = 1;
    for(item of clothes) {
         if(myMap.get(item[1])){
         myMap.set(item[1], [...myMap.get(item[1]), item]); 
        } else {
            myMap.set(item[1], [item]);
        }
    }
    
    
    for(item of myMap) {
        console.log(item[1].length)
       number *= item[1].length + 1;
    }
    return number - 1;
}