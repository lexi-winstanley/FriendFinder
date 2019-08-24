const friendsData = require("../data/friends.js");

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        friendsData.push(req.body);
        console.log(req.body);
        res.json(friendsData[findMatch()]);
    });
}

function findMatch() {
    let currentUserScores = friendsData[friendsData.length - 1].scores;
    let arrayDifferences = [];
    for (let i = 0; i < friendsData.length - 1; i++) {
        let sumDifferences = 0;
        let currentComparison = friendsData[i].scores;
        for (let j = 0; j < 10; j++) {
            sumDifferences += Math.abs(currentUserScores[j] - currentComparison[j]);
            console.log(sumDifferences);
        }
        arrayDifferences.push({ friendsIndex: i, differenceToUser: sumDifferences });
    }
    let minDifference = 51;
    let minDifferenceIndex = 0;
    for (let k = 0; k < arrayDifferences.length; k++) {
        if (arrayDifferences[k].differenceToUser < minDifference) {
            minDifference = arrayDifferences[k].differenceToUser;
            minDifferenceIndex = arrayDifferences[k].friendsIndex;
            console.log(arrayDifferences[k].differenceToUser);
            console.log(arrayDifferences[k].friendsIndex);
            console.log(minDifference);
        }
    }
    return minDifferenceIndex;
}