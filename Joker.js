///////////////////////////////////////////////	 
//Original code written by Decoder22
//
//Joker.js
//  contains framework for a Groupme bot 
//  originally intended to tell jokes
///////////////////////////////////////////////
//-------------------------------------------//
//                                           //
//    	          |\___|\                    //
//           	   /       |.                  //
//   	          |  .     |_                  //
//    	        |          )                 //
//   	          |      -v-v                  //
//   	          /        |\                  //
//	          Scratch-A-Bear Media           //
//-------------------------------------------//
//--------------Lukas Marinovic--------------//
//-------------------------------------------//
// Please visit:                             //
//  -Github                                  //
//	https://github.com/Lukasmmarinovic       //
//-------------------------------------------//
///////////////////////////////////////////////	  
//Copyright (C) Scratch-A-Bear Media - All 
//Rights Reserved
//scratchabearmedia@gmail.com August 2017
///////////////////////////////////////////////	 

var botID = "BOT ID";

var jokes = ["What do you call it when Batman skips church? Christian Bale.",
             "What do you call a group of unorganized cats? A cat-astrophe.",
             "What disease do you get when you decorate for Christmas? Tinselitus.",
             "Why don’t they play poker in the jungle? Too many Cheetahs.",
             "How many tickles does it take to make an octopus laugh? Ten-tickles.",
             "Why didn’t the toilet paper cross the road? It got stuck in a crack.",
             "Why did the stadium get hot after the game? All the fans left.",
             "What do you call the Children of the Corn’s father? Pop Corn.",
             "Why did the bicycle fall over? It was two tired.",
             "How did the hipster burn his tongue? He drank his coffee before it was cool.",
             "What kind of tea is hard to swallow? Reality."];


function sendText(text){
    UrlFetchApp.fetch("https://api.groupme.com/v3/bots/post", {"method":"post", "payload":'{"bot_id":"' + botID + '","text":"' + text + '"}'})
}




function doPost(e){
  var post = JSON.parse(e.postData.getDataAsString());
  var user_id = post.user_id;
  var text = post.text;
  var textArray = text.split(" ");
  
  if(textArray[0] == "/joke"){
    var index = Math.floor(Math.random() * jokes.length);
    sendText(jokes[index]);
  }

}


