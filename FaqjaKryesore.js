var counter;
setInterval(function(){
document.getElementById('radio' + counter).checked = true;
counter++;
if(counter >4){
  counter=1;
}

},6000);


function search(){
  var type;
  if(type=="Lajme" && type=="lajme"){
    window.location.href="lajmet.html";
  }
}


$('#search').keypress(function (e) {
  var str = $('#search').val();
  var domain = "http://127.0.0.1:3000/1.html?";
  var url = domain+"lajmet.html" + str;
  if (e.keyCode == "Lajmet") {
      location.href = url;
  }
});
