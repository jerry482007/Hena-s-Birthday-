const messages = [
"💖 Welcome My Lokkhi Pakhi ❤️",
"🌷 Ajker din ta amar jonno khub special... karon aj amar priyo Pakhir birthday.",
"🥹 Allah'r kache amar ekta doa... tumi shobshomoy sustho, bhalo ar hashikhushi thako.",
"❤️ Tomar ekta hashi amar puro din ta shundor kore dey.",
"🌹 Tumi amar jiboner shobcheye shundor upohar.",
"💞 Joto din jabe toto beshi tomake bhalobashbo.",
"🫶 Amar shobcheye priyo jayga holo tomar mon.",
"🤍 Tomake peye ami nijeke onek lucky mone kori.",
"🌸 Tumi amar chokhe shobcheye shundor meye.",
"💕 Amar protita doay tomar naam thake.",
"💖 Tomar sathe katano protita muhurto amar kache onek dami.",
"🌷 Tomar rag, obhiman, hashi... shob amar onek priyo.",
"❤️ Tumi amar jiboner shanti.",
"🥹 Kono din nijeke eka mone korba na... Ami shobshomoy tomar pashe achi.",
"💝 Ami chai tomar protita birthday amar sathei katuk.",
"🌸 Tumi amar jiboner shobcheye shundor golpo.",
"💖 Bhalobashi bole bojhano jabe na... tar cheyeo onek beshi bhalobashi tomake.",
"🌹 Happy 19th Birthday Amar Lokkhi Pakhi ❤️"
];

let current = 0;

function checkPassword(){

const pass = document.getElementById("password").value;

if (pass === "onlyus28") {
  alert("Welcome ❤️");

  document.getElementById("loginBox").style.display = "none";
  document.getElementById("mainBox").style.display = "block";

  let music = document.getElementById("music");
  music.play().then(() => {
    console.log("Song started");
  }).catch((error) => {
    console.log("Song blocked", error);
  });

}else{

document.getElementById("wrong").innerHTML="Umm Amar lokkhi pakhi vhul korche 🥹<br>Abar try koro jaan 💋";

}

}

function nextMessage(){

let music = document.getElementById("music");
music.play();

if(current<messages.length){

document.getElementById("message").innerHTML=messages[current];
current++;

}else{

document.getElementById("message").innerHTML="🌷 Etokhon koshto kore amar shob message gulo porso...❤️<br><br>Kalke ekhane tomar jonno amar special video thakbe. 🎥💖";

document.getElementById("nextBtn").style.display="none";

}

}
