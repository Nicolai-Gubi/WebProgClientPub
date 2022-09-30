function storst() {
    var tal1 = Number(document.getElementById("tal1").value);
    var tal2 = Number(document.getElementById("tal2").value);
    if (tal1 == tal2) {
        alert(tal1 + " og " + tal2 + " er lige store.");
    } else if (tal1 > tal2) {
        alert(tal1 + " er størrer end " + tal2);
    } else {
        alert(tal1 + " er mindre end " + tal2);
    }
  }