const triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];

function solution(triangle) {
    var answer = 0;

    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            //양 옆의 경우
            if (j === 0) {
                triangle[i][j] += triangle[i - 1][j];
            } else if (j === triangle[i].length - 1) {
                triangle[i][j] += triangle[i - 1][triangle[i - 1].length - 1];
            }

            // 가운데 경우
            else {
                triangle[i][j] += triangle[i - 1][j] > triangle[i - 1][j - 1] ? triangle[i - 1][j] : triangle[i - 1][j - 1];
            }
        }
    }

    answer = triangle[triangle.length - 1].reduce(function(previous, current) {
        return previous > current ? previous : current;
    });
    //console.log(answer);
    return answer;
}
solution(triangle);
