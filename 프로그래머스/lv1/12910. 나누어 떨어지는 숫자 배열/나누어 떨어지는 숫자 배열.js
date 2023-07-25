function solution(arr, divisor) {
    const answer = arr.filter((el)=>el%divisor===0).sort((a,b)=>a > b ? 1:-1);
    if(!answer.length) {
        return [-1];
    }
    return answer;
}