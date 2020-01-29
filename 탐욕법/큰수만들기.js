const number = '1924';
const k = 2;

/////////////////////
var StringBuilder = function() {
    this.buffer = new Array();
};

//순서대로 문자열을 추가한다.

StringBuilder.prototype.Append = function(strValue) {
    this.buffer[this.buffer.length] = strValue;
};

//문자열의 형식을 지정해서 추가한다.

StringBuilder.prototype.AppendFormat = function() {
    var count = arguments.length;

    if (count < 2) return '';

    var strValue = arguments[0];

    for (var i = 1; i < count; i++) strValue = strValue.replace('{' + (i - 1) + '}', arguments[i]);

    this.buffer[this.buffer.length] = strValue;
};

//해당하는 위치에 문자열을 추가한다. (문자위치가 아님)

StringBuilder.prototype.Insert = function(idx, strValue) {
    this.buffer.splice(idx, 0, strValue);
};

//해당문자열을 새로운 문자열로 바꾼다.

StringBuilder.prototype.Replace = function(from, to) {
    for (var i = this.buffer.length - 1; i >= 0; i--) this.buffer[i] = this.buffer[i].replace(new RegExp(from, 'g'), to);
};

//문자열로 반환한다.

StringBuilder.prototype.ToString = function() {
    return this.buffer.join('');
};
//////////////////////

function solution(number, k) {
    let numArr = number.split('');
    let len = numArr.length;
    let digit = number.length - k; // 자릿수

    var answer = new StringBuilder();

    while (digit) {
        let max, array;
        if (len === numArr.length && digit != 1) {
            array = numArr.slice(0, numArr.length - digit);
        } else {
            array = numArr.slice(0, numArr.length - digit + 1);
        }
        for (var i = 0; i < array.length; i++) {
            // maxNum 값이 없는 경우 현재 배열값으로 지정
            if (!max) {
                max = array[i];
            }

            // maxNum의 값과 현재 값을 비교해서 maxNum값을 가장 큰 값으로 유지
            if (max < array[i]) {
                max = array[i];
            }
        }

        numArr.splice(0, numArr.indexOf(max) + 1);
        answer.Append(max);
        digit--;
    }
    answer = answer.ToString();
    console.log(answer);
    return answer;
}

solution(number, k);
