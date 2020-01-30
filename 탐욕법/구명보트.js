const people = [70, 40, 60, 50];
const limit = 120;

function solution(people, limit) {
    var answer = 0;
    people.sort();

    while (people.length) {
        let first = people.shift();
        let idx = -1;

        people.some((i, index) => {
            let temp = first + i;

            if (temp > limit) {
                return true;
            } else {
                idx = index;
            }
        });

        if (idx >= 0) {
            people.splice(idx, 1);
        }
        answer++;
    }

    console.log(answer);
    return answer;
}

solution(people, limit);
