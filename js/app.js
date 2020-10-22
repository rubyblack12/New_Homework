let input_arr = [1, 2, 3, 4, 5, 6]
    // let input_arr_random = Number(prompt('Dãy số bất kỳ'))
    // input_arr.push(input_arr_random)
var X = Number(prompt('số x bất kì'))
let i;
let j;
console.log(input_arr)
for (i = 0; i < input_arr.length; i++) {

    for (j = i + 1; j < input_arr.length; j++) {
        if (input_arr[i] + input_arr[j] === X) {
            console.log(i, j);
        }
    }
}