function solution(array, commands) {
    var answer = [];
    function sliceAndSort(i,j,k) {
        const newArray = array.slice(i-1,j);
        answer.push(newArray.sort((a,b)=>a-b)[k-1])
    }
    for(let i=0; i<commands.length; i++) {
            sliceAndSort(commands[i][0], commands[i][1], commands[i][2])
    }
    return answer;
}

