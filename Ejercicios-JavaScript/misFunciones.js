function cambioUnidades(valor, unidad) {
    if(isNaN(valor)){
        alert("Se ingreso un valor invalido en " + unidad);
        document.lasUnidades.yarda.value = "";
        document.lasUnidades.metro.value = "";
        document.lasUnidades.pulgada.value = "";
        document.lasUnidades.pie.value = "";
    } else if (unidad == "metro") {
        document.lasUnidades.pulgada.value = valor * 39.3701;
        document.lasUnidades.pie.value = valor * 3.28084;
        document.lasUnidades.yarda.value = valor * 1.09361;
    } else if (unidad == "pulgada") {
        document.lasUnidades.metro.value = valor * 0.0254;
        document.lasUnidades.pie.value = valor * 0.08333;
        document.lasUnidades.yarda.value = valor * 0.027778;
    } else if (unidad == "pie") {
        document.lasUnidades.metro.value = valor * 0.3048;
        document.lasUnidades.pulgada.value = valor * 12;
        document.lasUnidades.yarda.value = valor * 0.333333;
    } else if (unidad == "yarda") {
        document.lasUnidades.metro.value = valor * 0.9144;
        document.lasUnidades.pulgada.value = valor * 36;
        document.lasUnidades.pie.value = valor * 3;
    }

}
function suma (){
    document.opeMat.sum_total.value= Number(document.opeMat.sum_num1.value) + Number(document.opeMat.sum_num2.value);
}


function resta (){
    document.opeMat.res_total.value= Number(document.opeMat.res_num1.value) - Number(document.opeMat.res_num2.value);
}


function mult (){
    document.opeMat.mul_total.value= Number(document.opeMat.mul_num1.value) * Number(document.opeMat.mul_num2.value);
}

function dividir (){
    document.opeMat.div_total.value= Number(document.opeMat.div_num1.value) / Number(document.opeMat.div_num2.value);
}

function gradRadi (id_elem,valor){
    if (id_elem=="grados") {
    document.getElementById ("radianes").value =valor*Math.PI/180; }
    if (id_elem=="radianes"){
        document.getElementById("grados").value =valor*180/Math.PI;
    }
}

function mostrar_ocultar (id_elem){
    if (id_elem=="ocultarDiv"){
        document.getElementById("unDiv").style.display= 'none';}
    if (id_elem=="mostrarDiv"){
        document.getElementById("unDiv").style.display= 'none';}
}

function dibujo(){

    var canvas= document.getElementById("myCanvas");
    var ctx =canvas.getContext("2d");

    ctx.fillStyle = "#1854ac";
    ctx.beginPath();
    ctx.rect (0,0,30,40);
    ctx.fill();
    ctx.closePath();


ctx.fillStyle = "#af3679"
ctx.beginPath();
ctx.arc(canvas.width/2, canvas.height/2,30,0,2*Math.PI);
ctx.
ctx.fill();
ctx.closePath();
}

function dibujarc() {

    var canvas= document.getElementById("myCanvas");
    var ctx =canvas.getContext("2d");

    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle ="#000";
    ctx.beginPath();

    for (var i=10;i<canvas.width;i=i+10){

    ctx.moveTo(i,0);
    ctx.lineTo(i,canvas.height);
    ;
    }

    for (var i=10;i<canvas.width;i=i+10){

        ctx.moveTo(0,i);
        ctx.lineTo(canvas.width,i);

    }

    ctx.stroke();
    ctx.closePath()
}

function dibujarimg() {

    var canvas= document.getElementById("myCanvas");
    var ctx =canvas.getContext("2d");

    var img = new Image();
    img.src= "images/auto.png";


    img.onload =function () {

        ctx.drawImage(img, 50,50);
    }




}