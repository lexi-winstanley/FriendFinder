const friendsData = require("../data/friends.js");

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);
        console.log(req.body);
        res.json(friendsData[findMatch()]);
      });
}

function findMatch() {
            let currentUserScores = friendsData[friendsData.length-1].scores;
            let arrayDifferences = [];
            for (let i=0; i < friendsData.length-1; i++) {
                let sumDifferences = 0;
                let currentComparison = friendsData[i].scores;
                for (let j=0; j < 10; j++) {
                    sumDifferences += Math.abs(currentUserScores[j] - currentComparison[j]);
                }
                arrayDifferences.push({friendsIndex : i, differenceToUser : sumDifferences});
            }
            let maxDifference = 0;
            let maxDifferenceIndex = 0;
            for(let k = 0; k < arrayDifferences.length; k++) {
              if(arrayDifferences[k].differenceToUser > maxDifference) {
                maxDifference = arrayDifferences[k].differenceToUser;
                maxDifferenceIndex = arrayDifferences[k].friendsIndex;
              }
            }
            return maxDifferenceIndex;
        }