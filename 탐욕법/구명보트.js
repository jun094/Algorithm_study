const people = [70, 50, 80, 60, 90, 50];
const limit = 100;

function solution(people, limit) {
    var answer = 0;
    people.sort((a, b) => b - a);

    while (1) {
        answer++;
        let first = people.pop();
        let idx = people.findIndex(ele => ele + first <= limit);

        if (idx >= 0) {
            people.splice(idx, 1);
        } else {
            break;
        }
    }

    answer = answer + people.length;

    return answer;
}

solution(people, limit);
