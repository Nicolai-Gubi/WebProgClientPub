var tal1;
var tal2;

const regex = /[0-9]|\./;

function validate1() {
    var tal = document.getElementById("tal1").value;
    if (!regex.test(tal)) {
        alert("Du har ikke indtastet et tal!");
        document.getElementById("tal1").value = "";
    } else {
        tal1 = tal;
    }
}

function validate2() {
    var tal = document.getElementById("tal2").value;
    if (!regex.test(tal)) {
        alert("Du har ikke indtastet et tal!");
        document.getElementById("tal2").value = "";
    } else {
        tal2 = tal;
    }
}

function storst() {
    if (tal1 == tal2) {
        alert(tal1 + " og " + tal2 + " er lige store.");
    } else if (tal1 > tal2) {
        alert(tal1 + " er størrer end " + tal2);
    } else {
        alert(tal1 + " er mindre end " + tal2);
    }
  }