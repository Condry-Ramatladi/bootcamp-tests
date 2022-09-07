function longestWord(sent){
    var words = sent.split(' ');
    var long = 0;
    var longW = ' ';
    console.log(words);
    for(var i = 0; i < words.length; i++){
      if(words[i].length >= long){
        long = words[i].length;
        longW = words[i];
      }
    }
    return longW;
  }
  
  function shortestWord(sent){
    var short = sent.length;
    var words = sent.split(' ');
    var shortW = ' ';
    console.log(words);
    for(var i = 0; i < words.length; i++){
      if(words[i].length <= short){
        short = words[i].length;
        shortW = words[i];
      }
    }
    return shortW;
  }
  
  function wordLengths(sent){
    var words = sent.split(' ');
    console.log(words);
    var length = 0;
    for(var i = 0; i < words.length; i++){
      length += words[i].trim().length;
    }
    console.log(length);
    return length;
  }
  
  
  //function shortestWord
  //function wordLengths