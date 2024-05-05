document.querySelector(".card_number_input").oninput = () => {
    document.querySelector(".card_number_box").innerText = document.querySelector(".card_number_input").value;
}

document.querySelector(".card_holder_input").oninput = () => {
    document.querySelector(".card_holder_name").innerText = document.querySelector(".card_holder_input").value;
}

document.querySelector(".month_input").oninput = () => {
    document.querySelector(".exp_month").innerText = document.querySelector(".month_input").value;
}

document.querySelector(".year_input").oninput = () => {
    document.querySelector(".exp_year").innerText = document.querySelector(".year_input").value;
}

document.querySelector(".cvv_input").onmouseenter = () => {
    document.querySelector(".front").style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector(".back").style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector(".cvv_input").onmouseleave = () => {
    document.querySelector(".front").style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector(".back").style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector(".cvv_input").oninput = () => {
    document.querySelector(".cvv_box").innerText = document.querySelector(".cvv_input").value;
}