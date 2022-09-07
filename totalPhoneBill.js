function totalPhoneBill(data){
    var sdata = data.split(',');
    console.log(sdata);
    var calld = 0;
    var smsd = 0;
    for(var i = 0; i < sdata.length; i++){
      if(sdata[i].includes('sms')){
        smsd++;
      }
      else if(sdata[i].includes('call')){
        calld++;
      }
    }
    console.log(calld +" "+ smsd);
    var total = ((calld*2.75)+(smsd*0.65));
    console.log(Number.parseFloat(total).toFixed(2));
    return 'R' + Number.parseFloat(total).toFixed(2);
  }