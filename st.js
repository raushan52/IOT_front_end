
/*var drop = new IOTC_Demo_LastDrop("#svg", {
    font: "Source Sans Pro"
    ,waveColor: "#0992CF"
    ,bgColor: "#264980"
    }
  );*/




  fill = function() {
    drop.update(100);
  }
  sip = function() {
    drop.update(drop.getValue()- Math.floor(5+Math.random()*15));
  }


 