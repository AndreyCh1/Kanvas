let button_size = document.querySelectorAll(".size"),
    input_width = document.querySelector(".wcs input"),
    input_height = document.querySelector(".hcs input"),
    custom_button = document.querySelector(".custom_size button"),
    user_size = input_width + input_height,
    total_price = document.querySelector(".total_price b"),
    input_checkbox = document.querySelectorAll(".option input")
// markup_canvas = document.getElementById("markup_canvas"),
// markup_frame = document.getElementById("markup_frame"),
// markup_delivery = document.getElementById("markup_delivery")

// console.log(button_size)

button_size.forEach(function (btn) {
    btn.addEventListener('click', function () {
        console.log(btn.innerText)

        let size = btn.innerText.split("x"),
            width = size[0] * 4,
            height = size[1] * 4,
            new_total_price = size[0] * size[1] * 0.3

        console.log(new_total_price)
        total_price.innerHTML = `${new_total_price}`
        console.log(width)
        document.querySelector(".canvas").style.width = width + "rem"
        document.querySelector(".canvas").style.height = height + "rem"
    })
})

// button_size.forEach(function (btn) {
//     btn.onclick = function() {
//         console.log(btn.innerText)

//         let size = btn.innerText.split("x"),
//             width = size[0] * 4,
//             height = size[1] * 4,
//             new_total_price = size[0] * size[1] * 0.3

//         console.log(new_total_price)
//         total_price.innerHTML = `<b>${new_total_price}</b>`
//         console.log(width)
//         document.querySelector(".canvas").style.width = width + "rem"
//         document.querySelector(".canvas").style.height = height + "rem"
//     }
// })

custom_button.addEventListener('click', function (event) {
    event.preventDefault()
    console.log(input_width.value)
    console.log(input_height.value)

    if (input_width.value < 15 || input_height.value < 15 || input_width.value > 160 || input_height.value > 160) {
        alert("Введіть корректний розмір від 15 до 160 см")
        return
    }

    // console.log(typeof(user_size))

    if (!isNaN(user_size)) {
        alert("Введіть корректну довжину! Довжина полотна може складатись тыльки з цифр!")
        // console.log(size)
        return
    }

    let width = input_width.value * 4,
        height = input_height.value * 4,
        new_total_price = input_width.value * input_height.value * 0.3

    console.log(new_total_price)
    total_price.innerHTML = `${new_total_price}`
    document.querySelector(".canvas").style.width = width + "rem"
    document.querySelector(".canvas").style.height = height + "rem"
})

// console.log(input_checkbox)

input_checkbox.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        let data_value = checkbox.getAttribute("data-value"), // значення data-value кожного input
            markup = 0

        if (data_value === "markup_canvas") {
            let markup = 35
            
            if (!checkbox.checked) {
                markup = -35
            }
            
            let new_total_price = Number(total_price.innerText) + Number(markup)
            total_price.innerHTML = `${new_total_price}`
        } else if (data_value === "markup_frame") {
            let markup = 10

            if (!checkbox.checked) {
                markup = -10
            }

            let new_total_price = Number(total_price.innerText) + Number(markup)
            total_price.innerHTML = `${new_total_price}`
        } else {
            let markup = 40

            if (!checkbox.checked) {
                markup = -40
            }

            let new_total_price = Number(total_price.innerText) + Number(markup)
            total_price.innerHTML = `${new_total_price}`
        }
    })
})

// markup_canvas.onclick = function() {
//     if (markup_canvas.checked) {
//         let new_total_price = +total_price.innerText + +35
//         total_price.innerHTML = `<b>${new_total_price}</b>`
//     } else {
//         new_total_price = total_price.innerText - 35
//         total_price.innerHTML = `<b>${new_total_price}</b>`
//     }
// }

// markup_frame.onclick = function() {
//     if (markup_frame.checked) {
//         let new_total_price = +total_price.innerText + +10
//         total_price.innerHTML = `<b>${new_total_price}</b>`
//     } else {
//         new_total_price = total_price.innerText - 10
//         total_price.innerHTML = `<b>${new_total_price}</b>`
//     }
// }

// markup_delivery.onclick = function() {
//     if (markup_delivery.checked) {
//         let new_total_price = +total_price.innerText + +40
//         total_price.innerHTML = `<b>${new_total_price}</b>`
//     } else {
//         new_total_price = total_price.innerText - 40
//         total_price.innerHTML = `<b>${new_total_price}</b>`
//     }
// }