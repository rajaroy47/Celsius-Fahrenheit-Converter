let celsius = document.getElementById('cel');
let fahrenheit = document.getElementById('fah');


celsius.addEventListener('input', () => {
    let c = celsius.value;
    let f = (c * 9/5) + 32;
    if (!Number.isInteger(f)){
        f = f.toFixed(4);
    }
    fahrenheit.value = f;
})

fahrenheit.addEventListener('input', () => {
    let f = fahrenheit.value;
    let c = (f - 32) * 5/9;
    if (!Number.isInteger(c)){
        c = c.toFixed(4);
    }
    celsius.value = c;

})