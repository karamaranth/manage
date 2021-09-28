let search_btn = document.querySelector("#search_btn");
let inline_dis = document.querySelectorAll(".inline_disabled");
let block_dis = document.querySelectorAll(".block_disabled");
let selection = document.querySelector(".selection")
let submit_btn = document.querySelector("#submit_btn");
let id1 = document.querySelector("#id");
let modify_text = document.querySelector("#modify_text");

search_btn.addEventListener('click', e => {
    inline_dis.forEach( x => {
        x.style.display = "inline";
    })
    block_dis.forEach( x => {
        x.style.display = "block";
    })
})

// 下拉式表單 event

submit_btn.addEventListener('click', e => {
    let ref = db.collection('會員資料測試').doc(id1.value);
    let sv = selection.value;
    if(sv == 'name'){
        ref.update({
            name: modify_text.value
        }).then(()=>{
            alert("完成！");
            inline_dis.forEach( x => {
                x.style.display = "none";
            })
            block_dis.forEach( x => {
                x.style.display = "none";
            })
            modify_text.value = null;
        });
        
    } else if (sv == 'phone_number'){
        ref.update({
            phone_number: modify_text.value.toString()
        }).then(()=>{
            alert("完成！");
            inline_dis.forEach( x => {
                x.style.display = "none";
            })
            block_dis.forEach( x => {
                x.style.display = "none";
            })
            modify_text.value = null;
        });
        
    } else if (sv == 'gender'){
        ref.update({
            gender: modify_text.value
        }).then( () => {
            alert("完成！");
            inline_dis.forEach( x => {
                x.style.display = "none";
            })
            block_dis.forEach( x => {
                x.style.display = "none";
            })
            modify_text.value = null;
        });
    } else{
        alert("請選擇修改項目！");
    }







})

