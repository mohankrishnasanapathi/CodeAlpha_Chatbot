const knowledgeBase = [

{
title:"Artificial Intelligence",
keywords:["ai","artificial intelligence","what is ai"],
content:"Artificial Intelligence (AI) is the simulation of human intelligence by machines. Examples include ChatGPT, DeepSeek AI, Gemini and Claude."
},

{
title:"ChatGPT",
keywords:["chatgpt","gpt","openai"],
content:"ChatGPT is an AI chatbot developed by OpenAI. It understands natural language and helps answer questions, write code, generate text and much more."
},

{
title:"DeepSeek AI",
keywords:["deepseek","deepseek ai"],
content:"DeepSeek AI is a large language model designed for coding, mathematics, reasoning and general conversations."
},

{
title:"HTML",
keywords:["html","web page","hypertext"],
content:"HTML stands for HyperText Markup Language. It is used to build the structure of websites."
},

{
title:"CSS",
keywords:["css","style","design"],
content:"CSS stands for Cascading Style Sheets. It controls colors, layouts and animations."
},

{
title:"JavaScript",
keywords:["javascript","js"],
content:"JavaScript is a programming language used to create interactive web applications."
},

{
title:"Machine Learning",
keywords:["machine learning","ml"],
content:"Machine Learning is a branch of AI where computers learn from data instead of explicit programming."
}

];
function preprocess(text){

return text
.toLowerCase()
.replace(/[^\w\s]/g,"")
.trim();

}

function similarity(input, keywords){

let score = 0;

let words = preprocess(input).split(" ");

keywords.forEach(keyword=>{

let keyWords = preprocess(keyword).split(" ");

keyWords.forEach(word=>{

if(words.includes(word)){
score++;
}

});

});

return score;

}

function retrieveAnswer(question){

let highest = 0;

let answer = "Sorry, I couldn't find any information.";

knowledgeBase.forEach(item=>{

let score = similarity(question,item.keywords);

if(score > highest){

highest = score;
answer = item.content;

}

});

return answer;

}

function addMessage(type,text){

const chat=document.getElementById("chat");

const div=document.createElement("div");

div.className=type;

div.innerHTML=text;

chat.appendChild(div);

chat.scrollTop=chat.scrollHeight;

}

function sendMessage(){

const input=document.getElementById("question");

const question=input.value;

if(question=="") return;

addMessage("user","👤 "+question);

let answer=retrieveAnswer(question);

setTimeout(()=>{

addMessage("bot","🤖 "+answer);

},500);

input.value="";

}

document.getElementById("question")
.addEventListener("keypress",function(e){

if(e.key==="Enter"){

sendMessage();

}

});
