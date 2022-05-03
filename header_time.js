  var timer = setInterval(function() {
    localTimer();
  }, 1000);

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function localTimer() {
    var today = new Date();
    var time = addZero(today.getHours()) + ":" + addZero(today.getMinutes()) + ":" + addZero(today.getSeconds());
    document.getElementById("current_time").innerHTML = time;

    var date = today.getFullYear()+' . '+(today.getMonth()+1)+' . '+today.getDate();
    document.getElementById("current_date").innerHTML = date;
}