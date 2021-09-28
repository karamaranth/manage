let imgs = document.querySelectorAll('.imgs');

function imgSlider(anything){
    document.querySelector('.big_photo').src = anything;
    document.querySelector('.big_photo').style.display = 'inline-block';
}

function changeColor(x){
    document.querySelector('.circle').style.background = x;
    document.querySelector('#service').style.background = x;
}

function toIndex(x, y){
    document.querySelector('#service').href = x;
    document.querySelector('#service').innerText = y;
}

