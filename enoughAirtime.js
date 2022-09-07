function enoughAirtime(usage, cost){
    var logd = usage.split(',');
    var smsd = 0;
    var calld = 0;
    var datad = 0;
    for(var i = 0; i < logd.length; i++){
      if(logd[i].includes('sms')){
         smsd++;
         }
      else if(logd[i].includes('call')){
        calld++;
      }
      else if(logd[i].includes('data')){
        datad++;
      }
    }
    console.log(calld + " " + smsd + " " + datad);
    var calc = cost - ((1.88*calld) + (0.75*smsd) + (12*datad));
    if(calc <= 0){
      return 'R' + Number.parseFloat(0).toFixed(2);
    }
    var total = Number.parseFloat(calc).toFixed(2);
    console.log(total);
    return 'R' + total;
  }