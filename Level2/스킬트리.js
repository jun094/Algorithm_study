const skill = "CBD";
const skill_trees =  ["BACDE", "CBADF", "AECB", "BDA"];

function solution(skill, skill_trees) {
    var answer = 0;
    let arr = skill.split("");
    let count =0;

    skill_trees.forEach(i=>{
        let check = i.split("");
        let len = check.length;
        let flag = false;

        for(let j=0;j<len;j++){
            let temp = check.shift();

            if(temp == arr[count]){
                count++;
            }
        }

        if( flag == true ){
            console.log(i);
            answer++;
        }
        count = 0;

    })    

    console.log(answer);
    return answer;
}

solution(skill, skill_trees)