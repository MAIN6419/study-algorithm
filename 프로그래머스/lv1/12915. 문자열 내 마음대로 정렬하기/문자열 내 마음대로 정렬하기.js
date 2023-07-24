function solution(strings, n) {
    let temp;
    let isSorted = true;
    for(let i=0; i<strings.length; i++) {
        for(let j=0; j<strings.length - 1 - i; j++) {
            if(strings[j][n] > strings[j+1][n]){
                temp = strings[j+1];
                strings[j+1] = strings[j];
                strings[j] = temp;
                isSorted = false;
            } else if(strings[j][n]===strings[j+1][n]){
                if(strings[j]>strings[j+1]){
                temp = strings[j+1];
                strings[j+1] = strings[j];
                strings[j] = temp;
                isSorted = false;
                }
            }
        }
    }
    if(isSorted) {
        return strings;
    }
    return strings
}