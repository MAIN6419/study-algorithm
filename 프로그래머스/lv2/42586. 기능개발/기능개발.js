function solution(progresses, speeds) {
    // 각 작업이 완료되는데 필요한 일수를 계산하여 저장하는 배열
    const complete = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    // 배포의 순서와 개수를 저장하는 배열
    const answer = [];

    // 첫 번째 작업의 완료까지 걸리는 날짜를 초기값으로 설정
    let maxDay = complete[0];
    // 배포마다 몇 개의 기능이 배포되는지 카운트하는 변수
    let count = 1;
    
    // 비교를 위해서는 두 번째 작업부터 비교를 시작해야함
    // 두 번째 작업부터 마지막 작업까지 반복
    for (let i = 1; i < complete.length; i++) {
        // 만약 현재 작업의 완료까지 걸리는 날짜가 이전까지의 maxDay보다 작거나 같다면
        if (complete[i] <= maxDay) {
            // count를 증가시켜 같은 배포에 포함될 기능 개수를 늘려줌
            count++;
        } else {
            // 그렇지 않다면 이전 배포의 기능 개수를 answer 배열에 추가하고,
            // 새로운 배포의 기능 개수로 count를 초기화하며 maxDay를 갱신
            answer.push(count);
            count = 1;
            maxDay = complete[i];
        }
    }
    // 마지막 배포 처리 두 번째 인덱스 부터 비교했으므로 마지막 배포를 정답 배열에 추가해주어야함
    answer.push(count)
    return answer;
}
// 테스트 1
// [93, 30, 55]
// 1. (100 - 93) / 1 = 7 complete = [7]
// 2. (100 - 30) / 30 = 3 complete = [7,3]
// 3. (100 - 55) / 5 = 9 complete = [7,3,9]
// [7, 3, 9]
// maxDay = 7, counter = 1;
// 1. 3 <= 7 => true  counter++;
// 2. 9 <= 7  => false answer = [2] , count = 1, mayDay = 9
// 마지막 배포 처리 => answer.push(counter)
// answer [2,1]