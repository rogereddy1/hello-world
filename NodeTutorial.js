var Tutor = require('./Tutorial.js');
exports.Nodetutorial = function()
{
    console.log("Node Tutorial");
    //Tutor.tutorial();
    exports.Nodetutorial.pTutor = function() // this adds the funtion to Nodetutorial here
    //exports.pTutor = function() // this adds the function to the exports module in Tutorial.js
    //function pTutor() // this doesnt work
    {
        var PTutor = Tutor;
        PTutor.tutorial();
    }
}