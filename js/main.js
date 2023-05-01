function hitungUmur() {
    var date = parseInt(document.getElementById("date").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
  
    var hariIni = new Date();
  
    var tahun = hariIni.getFullYear() - year;
    var bulan = hariIni.getMonth() - month + 1;
    var hari = hariIni.getDate() - date;
  
    if (bulan < 0 || (bulan === 0 && hari < 0)) {
      tahun--;
      bulan = 12 - Math.abs(bulan);
    }
  
    if (hari < 0) {
      var prevMonthDays = getDaysInMonth(month - 1, year);
      hari = prevMonthDays - Math.abs(hari);
      if (bulan === 0) {
        bulan = 11;
        tahun--;
      } else {
        bulan--;
      }
    }
  
    document.getElementById("hasilUmur").innerHTML =
      "Umur Anda " +
      tahun +
      " tahun, " +
      bulan +
      " bulan, " +
      hari +
      " hari.";
  }
  
  function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }
  