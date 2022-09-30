for (let index = 0; index < 5; index++) {
    var tal = Math.floor(Math.random() * 90) + 1;
    var html = '<div class="circle">' + tal + '</div>';
    document.getElementById("lotto").innerHTML += html; 
}