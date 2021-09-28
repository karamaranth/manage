let search_btn = document.querySelector("#search_btn");

let inline_dis = document.querySelectorAll(".inline_disabled");
let block_dis = document.querySelectorAll(".block_disabled");

let delete_btn = document.querySelector("#delete_btn");
let id1 = document.querySelector("#id");


search_btn.addEventListener('click', e => {
    inline_dis.forEach( x => {
        x.style.display = "inline";
    })
    block_dis.forEach( x => {
        x.style.display = "block";
    })
})

delete_btn.addEventListener('click', e => {
    let cf = confirm("是否確定刪除資料？ \n\n（刪除後無法復原）")
    if (cf == true){
            db.collection('會員資料測試').doc(id1.value).delete().then(() =>{ 
                alert("已成功刪除！");
            })
    }

})