let input = document.getElementById('input'),
    output = document.getElementById('output');
window.addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
        if (output.innerHTML == '') {
            output.style.opacity = '0';
        }
        output.style.opacity = '1';
        output.innerHTML += input.value + "<br>";
        input.value = "";
    } else if (e.key == "Backspace") {
        output.style.opacity = '0';
        output.innerHTML = '';
    }
})

// 2 задание

function returnFib(x, y) {
    let arr = [];
    let z;
    for (let i = 0; i <= 12; i++) {
        z = x + y;
        arr.push(z);
        x = y;
        y = z;
    }
    return arr;
}
output.innerHTML = "Вывод чисел Фибоначи: <br>" + returnFib(0, 1);