

let myNum = 1;
const totalNum = 3;

function numberSetting(){
    document.getElementById("num").innerText = myNum;
}
numberSetting();

document.getElementById("num").innerText = myNum;
document.getElementById("btn_prev").onclick = function(){
    console.log("이전버튼");
    // myNum--;
    if(myNum == 1){
        myNum = totalNum;
    }else{
        myNum--;
    }
    numberSetting();

    document.getElementById("pic").style.border = "3px solid black";
    document.getElementById("pic").style.left = "0";
    document.getElementById("pic").src = "./img/slide_1.png";
}

document.getElementById("btn_next").onclick = function(){
    console.log("다음버튼");
    // myNum++;
    if(myNum == totalNum){
        myNum = 1;
    }else{
        myNum++;
    }
    numberSetting();

    document.getElementById("pic").style.border = "3px solid red";
    document.getElementById("pic").style.left = "500px";
    document.getElementById("pic").src = "./img/slide_2.png";


}

