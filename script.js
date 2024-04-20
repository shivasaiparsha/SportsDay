// Function to generate a random time between 10 and 15 seconds
function getRandomTime() {
    return Math.floor(Math.random() * 6) + 10;
  }
  
  // Opening Ceremony function
  function OpeningCeremony(callback) {
    console.log("Let the games begin!");
    setTimeout(function() {
      const score = { red: 0, blue: 0, green: 0, yellow: 0 };
      callback(score);
    }, 1000);
  }
  
  // Race 100 meters function
  function Race100M(score, callback) {
    console.log("Race 100 Meters");
    const colors = ['red', 'blue', 'green', 'yellow'];
    let times = [];
    for (let i = 0; i < 4; i++) {
      times.push(getRandomTime());
    }
    times.sort((a, b) => a - b);
    score[colors[times.indexOf(Math.min(...times))]] += 50;
    score[colors[times.indexOf(times[1])]] += 25;
    console.log("Race results:", times);
    console.log("Updated scores:", score);
    callback(score);
  }
  
  // Long Jump function
  function LongJump(score, callback) {
    console.log("Long Jump");
    const colors = ['red', 'blue', 'green', 'yellow'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    score[color] += 150;
    console.log(color + " won the Long Jump");
    console.log("Updated scores:", score);
    setTimeout(function() {
      callback(score);
    }, 2000);
  }
  
  // High Jump function
  function HighJump(score, callback) {
    console.log("High Jump");
    const color = prompt("What color secured the highest jump?");
    if (color && score.hasOwnProperty(color.toLowerCase())) {
      score[color.toLowerCase()] += 100;
      console.log(color + " won the High Jump");
      console.log("Updated scores:", score);
    } else {
      console.log("Event was cancelled");
    }
    callback(score);
  }
  
  // Award Ceremony function
  function AwardCeremony(score) {
    console.log("Award Ceremony");
    const colors = Object.keys(score);
    colors.sort((a, b) => score[b] - score[a]);
    console.log(`${colors[0].toUpperCase()} came first with ${score[colors[0]]} points.`);
    console.log(`${colors[1].toUpperCase()} came second with ${score[colors[1]]} points.`);
    console.log(`${colors[2].toUpperCase()} came third with ${score[colors[2]]} points.`);
    console.log(`${colors[3].toUpperCase()} came  fourth with ${score[colors[2]]} points.`);
  }
  
  // Start the Sports Day
  function startSportsDay() {
    OpeningCeremony(function(score) {
      Race100M(score, function(score) {
        LongJump(score, function(score) {
          HighJump(score, AwardCeremony);
        });
      });
    });
  }
  