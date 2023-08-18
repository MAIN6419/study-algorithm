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
// 테스트 1
// "()()"
// 1. "(" => o answer ['(']
// 2. ")" => x answer []
// 3. "(" => o answer ['(']
// 4. ")" => x answer []
// answer.length === 0 => true

// 테스트 3
// ")()("
// 1. ")" => x answer.length===0 => false

// 테스트 4
// "(()("
// 1. "(" => o answer ['(']
// 2. "(" => o answer ['(', '(']
// 3. ")" => x answer ['(']
// 4. "(" => 0 answer ['(', '('] 
// answer.length === 0 => false