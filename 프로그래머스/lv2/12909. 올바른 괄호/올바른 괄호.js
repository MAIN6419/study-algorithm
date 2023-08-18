function solution(s) {
    const answer = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            answer.push('(');
        } else {
            if (answer.length === 0) {
                return false; // 올바른 괄호가 아님
            }
            answer.pop(); // 열린 괄호와 짝이 맞음
        }
    }
    
    return answer.length === 0; // 스택에 남은 괄호가 없어야 올바른 괄호
}