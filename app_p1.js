
let name1 = document.querySelector("#name");
let id1 = document.querySelector("#id");
let tel1 = document.querySelector("#tel");
let btn1 = document.querySelector("#submit_btn");
let gen1 = document.querySelector("#gender");
let photo1 = document.querySelector("#photo")
let change_mode_btn = document.querySelector("#change_mode");
let h2_mode = document.querySelector("#h2_mode");
// ---------- 避免 ID 空白
id1.addEventListener("keypress", e => {
    if (id1.value[0] == " "){
        id1.value = "";
        alert("ID 開頭不可為空白")
    }
})
id1.addEventListener("keyup", e => {
    if (id1.value[0] == " "){
        id1.value = "";
        alert("ID 開頭不可為空白")
    }
})
// ----------- 新增 
btn1.addEventListener("click", e => {
    let cf = confirm("是否確定新增？");
    if (id1.value == null || id1.value == ""){
        alert("會員 ID 不可為空！")
    } else{
        if(cf == true){
            let ref = db.collection('會員資料測試').doc(id1.value.toString());
            ref.set({
                name: name1.value,
                id_number: id1.value.toString(),
                gender: gen1.value,
                phone_number: tel1.value.toString(),
                photo: photo1.value

            }, {merge:false}).then( () => {
            alert("新增成功！");  
            console.log('Set Data Successful');
            name1.value = null;
            id1.value = null;
            tel1.value = null; 
            gen1.value = null;
            photo1.value =null;

            console.log("You did it!");
            });
        }
    }
})


// ----------- 修改資料模式

change_mode_btn.addEventListener('click', e => {

    if (change_mode_btn.innerText == "改為「修改資料」"){
        h2_mode.innerText = "修改會員資料"
        change_mode_btn.innerText = "改為「新增資料」"; //因為靠btn的innerHTML來做判斷，所以改btn的html放最後面

    } else {
        h2_mode.innerText = "新增會員資料"
        change_mode_btn.innerText = "改為「修改資料」"; //因為靠btn的innerHTML來做判斷，所以改btn的html放最後面

    }

})




// function trytry(){
   
//     var ref = db.collection('麻豆套房').doc();

//     ref.set({
//         名字: "黃建勛",
//         性別: "男",
//         電話: 0987369000
//     }).then(() => {
//     console.log('set data successful');
//     });
// }
