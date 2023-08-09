function solution(phone_book) {
    const myMap = new Map();

    // 전화번호를 Map에 저장
    for (const phoneNumber of phone_book) {
        myMap.set(phoneNumber, true);
    }
    
    // 각 전화번호를 접두어로 갖는지 검사
    for (const phoneNumber of phone_book) {
        for (let i = 1; i < phoneNumber.length; i++) {
            const sliceNum = phoneNumber.slice(0, i);
            if (myMap.has(sliceNum)) {
                return false;
            }
        }
    }

    return true;
}