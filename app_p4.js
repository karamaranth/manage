let search_btn = document.querySelector("#search_btn");

let inline_dis = document.querySelectorAll(".inline_disabled");
let block_dis = document.querySelectorAll(".block_disabled");

let delete_btn = document.querySelector("#delete_btn");
let id1 = document.querySelector("#id");

let test_btn = document.querySelector(".test_btn");
let aim;

let table_id_number = document.querySelector("#table_id_number");
let table_name = document.querySelector("#table_name");
let table_gender = document.querySelector("#table_gender");
let table_phone_number = document.querySelector("#table_phone_number");
let camera_switch = document.querySelector("#camera_switch");
let cam_video = document.getElementById('preview');
let table_photo = document.querySelector('#table_photo');

// 查詢
search_btn.addEventListener('click', e => {

        aim = db.collection('會員資料測試').doc(id1.value);
        aim.get().then(doc => {
            table_id_number.innerHTML = doc.data().id_number;
            table_name.innerHTML = doc.data().name;
            table_phone_number.innerHTML = doc.data().phone_number;
            table_gender.innerHTML = doc.data().gender;
            table_photo.src = doc.data().photo;
            id1.value = null;
        })
    })


// 查詢下一筆時清空資料
id1.addEventListener('mousedown', e => {
    table_id_number.innerHTML = null;
    table_name.innerHTML = null;
    table_gender.innerHTML = null;
    table_phone_number.innerHTML = null;
    table_photo.src = "#";
})

let scanner = new Instascan.Scanner({ video: cam_video});
Instascan.Camera.getCameras().then(function(cameras){
    if(cameras.length > 0 ){
        scanner.start(cameras[0]);
    } else{
        alert('No cameras found');
    }

}).catch(function(e) {
    console.error(e);
});

scanner.addListener('scan',function(c){
    document.getElementById('id').value=c;
});

camera_switch.addEventListener('click', e => {
    if (camera_switch.innerText == "Camera off"){
        scanner.stop();
        camera_switch.innerText = "Camera on";
    } else if (camera_switch.innerText == "Camera on"){
        scanner.start();
        camera_switch.innerText = "Camera off";
    }

})

