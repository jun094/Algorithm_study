const skill = 'CBD';
const skill_trees = ['BACDE', 'CBADF', 'AECB', 'BDA'];

function solution(skill, skill_trees) {
    var answer = skill_trees.length;

    skill_trees.forEach(check => {
        let arr = skill.split(''); //[c,b,d]
        let flag = false;

        for (const ele of check) {
            if (arr.length && skill.includes(ele)) {
                if (arr[0] == ele) {
                    //check를 돌면서 스킬이 있으면 제일 먼저는 무조건 c !
                    arr.shift();
                } else {
                    flag = true;
                    break;
                }
            }
        }

        if (flag) {
            answer--;
        }
    });

    console.log(answer);
    return answer;
}

solution(skill, skill_trees);
