function solution(numbers) {
   let answer = numbers.map(String).sort((a, b) => (b + a) - (a + b)).join("");
    if(!Number(answer)) return "0";
    return answer
}