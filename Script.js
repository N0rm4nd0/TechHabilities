let clicks = 0;
let timeSecond = 10;
const timeH = document.querySelector("h1");

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `${sec < 10 ? "0" : ""}${sec}`;
}

function endCount() {
  timeH.innerHTML = "Time out";
  timeSecond = 10;
}

function counter(){
    clicks += 1;
    document.getElementById("clickArea").innerHTML = clicks;
    if(clicks == 1){
        displayTime(timeSecond);

        let countDown = setInterval(() => {
            timeSecond--;
            displayTime(timeSecond);
            if (timeSecond == 0 || timeSecond < 1) {
              endCount();
              clearInterval(countDown);
            }
          }, 1000);
    }
}

function reset(){
    clicks = 0;
    document.getElementById("clickArea").innerHTML = 0;
}