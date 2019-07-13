//<script language="javaScript" type="text/javascript">
function kalkulator() {
    var angkaPertama = parseInt(document.getElementById("angkaPertama").value);
    var angkaKedua = parseInt(document.getElementById("angkaKedua").value);
    var op = document.getElementById("operator").value;
    var hasil = document.getElementById("hasil");
    var total;
    if (isNaN(angkaPertama) || isNaN(angkaKedua)) {
        alert('belum bisa jumlahin huruf, angka dong bro!')
    } else {
        if (op == "+") {
            total = angkaPertama + angkaKedua;
        } else if (op == "-") {
            total = angkaPertama - angkaKedua;
        }
        if (op == "*") {
            total = angkaPertama * angkaKedua;
        }
        if (op == "/") {
            total = angkaPertama / angkaKedua;
        }
    }
    hasil.value = total;
}
//</script>