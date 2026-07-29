
const messages = [
"Welcome pakhi amar banano chotto akta duniya te ❤️",
"Ajker din sesh? But ato easily to na, arektu baki ache. Dekhte thako. 😊",
"Ajker din sesh hobe, rat sesh abar kalke notun din suru hobe. Tmi always amar kache special, but ajker din ta amar kache aro special karon tmi ajke ei prithibite ascile. ❤️",
"Allah'r kache ektai doa... tmi shob somoy sustho, bhalo r hashi khushi thako. 🤲",
"Tmar hashi amar puro akta kharap din kew bhalo kore dey. 😊",
"Tmake peye ami nijere onek lucky mone kori, karon bhalobasha to shob tmar moddei. ❤️",
"Tmi amar jibon er shobcheye shundor upohar. 🎁",
"Tmar choto choto rag, obhiman, hashi, jealousy, possessiveness... shob kichui amar kache onek priyo. 🥹❤️",
"Kono din nijeke eka mone korba na... amar doa ar mon shobshomoy tomar sathei thakbe. 🤍",
"Tumi amar jiboner emon ekjon... jake ami shobshomoy bhalo rakhte chai. 🌸",
"Tumi jemon acho... temoni theko. Karor jonno nijeke bodle dio na, karon ami Hena kei bhalobashi. ❤️",
"Kono din nijeke eka mone korba na. Tmar Jarin ache tmar pashe, tmar chaya hoye. 🫂",
"Life a boyosh kataiso sudhu 18 bochor, r 19 bochor a pa rakteso. Jibone jotoi jhor ashuk... tomar mukher hashi jeno kokhono na haray. 🌷",
"Ami chai life er shob birthday tmi hashi khushi r bhalobashay vhora ak ak ta muhurte peye anonder sthe kataw. 🎂",
"Tmar proti amar respect, love, care... kichui kombe na. Always sudhu barbe. 💖",
"Ajke niom onujay tmar din. Sobai birthday te bole jar birthday seta naki tar din. Kintu amar khetre protita din e tmar, r tmar din er moddei ami. 🥰",
"Dekho tmar favourite song taw background a lagay dichi. Emotional abar hoiyo na. Hasho... tmar ei hashi dekhar jonnoi amar shob kostho kora. 🎵❤️",
"Amar soulmate, Happy Birthday again. Boring hoiteso amar ashob paglamu te? Accha thak thak, r boring hoite hobe na. 19th birthday te 19 tai surprise. Ok... ebar last surprise er jonno ready hoye jao pakhi. 💝"
];

let current = 0;

function checkPassword() {
  const pass = document.getElementById("password").value;

  if (pass === "onlyus28") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("welcomeBox").style.display = "block";

    const music = document.getElementById("music");
    music.muted = false;
    music.play().catch(() => {});
  } else {
    document.getElementById("wrong").innerHTML =
      "Umm Amar lokkhi pakhi vhul korche 🥹<br>Abar try koro jaan 💋";
  }
}

function startMessages() {
  document.getElementById("welcomeBox").style.display = "none";
  document.getElementById("mainBox").style.display = "block";
  current = 0;
  nextMessage();
}

function nextMessage() {
  if (current < messages.length) {

    let number = String(current + 1).padStart(2, "0");

    document.getElementById("alertTitle").innerHTML =
      "💌 Message Alert #" + number;

    document.getElementById("message").innerHTML =
      messages[current];

    current++;

  } else {
    startCountdown();
    function startCountdown() {

  document.getElementById("mainBox").style.display = "none";
  document.getElementById("blackScreen").style.display = "flex";

  let count = 3;
  const countdown = document.getElementById("countdown");

  countdown.innerHTML = count;

  const timer = setInterval(() => {

    count--;

    if (count > 0) {
      countdown.innerHTML = count;
    } else if (count === 0) {
      countdown.innerHTML = "❤️";
    } else {

      clearInterval(timer);

      document.getElementById("blackScreen").style.display = "none";
      document.getElementById("videoSection").style.display = "block";

      const music = document.getElementById("music");
      music.pause();

    }

  }, 1000);

    }
  }
}
function showFinalMessage() {

  document.getElementById("videoDoneBtn").style.display = "none";

  document.getElementById("finalMessage").style.display = "block";

  const music = document.getElementById("music");

  music.currentTime = 0;

  music.play().catch(() => {});

}
