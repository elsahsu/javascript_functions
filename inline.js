function emotions(emotion, count, action) {
    var laughSound = action(count);
    return "I am " + emotion + ", " + laughSound;
}

console.log(emotions("happy", 2,  function(num) {
    var output = "";
    for (x = 1; x <= num; x++) {
        output = output + "ha";
    }
  return output + "!";
}));
