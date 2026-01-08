 const greeting= document.getElementById("greeting");
   const jam = new Date().getHours();

  let ucapan = "";
    if (jam >= 5 && jam < 11) {
    ucapan = "Selamat Pagi";
  } else if (jam >= 11 && jam < 15) {
    ucapan = "Selamat Siang";
  } else if (jam >= 15 && jam < 18) {
    ucapan = "Selamat Sore";
  } else {
    ucapan = "Selamat Malam";
  }

  greeting.textContent = ucapan;
  