const bridge_length = 100;
const weight = 100;
const truck_weights = [10];

function solution(bridge_length, weight, truck_weights) {
    let temp = [];
    let time = 0;

    for (let i = 0; i < bridge_length; i++) {
        temp.push(0);
    }

    for (let i = 0; i < truck_weights.length; i++) {
        temp.pop();
        let truck = truck_weights[i];

        console.log('검사항목', truck, temp);

        let initValue = truck;
        let sum = temp.reduce((initialValue, currentValue, currentIndex, array) => {
            return initialValue + currentValue;
        }, initValue);

        console.log('배열 총합', sum);

        if (sum <= weight) {
            temp.unshift(truck);
        } else {
            temp.unshift(0);
            i = i - 1;
        }
        console.log(temp);
        time++;
        console.log(time);
    }
    time = time + bridge_length;

    console.log(time);
    return time;
}

solution(bridge_length, weight, truck_weights);
