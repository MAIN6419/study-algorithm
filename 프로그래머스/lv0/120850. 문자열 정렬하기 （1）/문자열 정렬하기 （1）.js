function solution(my_string) {
    return my_string.split("").map(Number).filter((item) => !isNaN(item)).sort((a,b)=>a-b);
}
