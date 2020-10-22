// // let arr = [1, 9, 4, 7, 5, 10]
// // let arrnew = []
// //     // for (let i = 0; i < arr.length; i++) {
// //     //     if (arr[i] % 2 == 0) {
// //     //         arrnew.push(arr[i])
// //     //     }

// // // }
// // // console.log(arrnew)
// // // tự tìm hiểu thêm về bubblesort

// // let arr_1 = arr.sort(function(a, b) {
// //     return a - b;
// // });
// // let arr_2 = arr_1.filter(function(num) {
// //     return num % 2 == 0

// // })
// // console.log(arr_2);


// // Bài 2: Cho biến X, giá trị đầu vào của x chỉ có thể là 0 hoặc 1.
// // a. kHÔNG SỬ DỤNG (IF ...ELSE, SWITCH ... CASE), hãy in ra màn hình :
// // Nếu x=1 ==> in ra false
// // X = 0 ==> in ra true
// // a. kHÔNG SỬ DỤNG (IF ...ELSE, SWITCH ... CASE), hãy in ra màn hình :
// // Nếu x = 1 ==> in ra 0
// // X = 0 ==> 1

// let X = Number(prompt("Nhập vào 1 số x"))

// // let obj = {
// //     i: false,
// //     0: true
// // }

// function test1(x) {
//     return x == 0;
//     // return obj[x]
// }

// function test2(x) {
//     return x
// }
let $no = document.getElementById('no');
let $answers = document.getElementById('answers')
    // $no.onmouseenter = function() {
    //         alert('bbb');
    //     }
    //     // onmouseenter ghi đè sự kiện
$no.addEventListener('mouseenter', function() {
    $answers.classList.toggle('reverse')
});