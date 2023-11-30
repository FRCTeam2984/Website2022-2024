"use strict";


console.log(document.getElementById("dropdown").style.display);
function toggleDropdown() {
   console.log('hi!');
   if (document.getElementById("dropdown").style.display === "none") {
      console.log("shown")
      document.getElementById("dropdown").style.display = "flex";
      } else {
      console.log("hidden")
      document.getElementById("dropdown").style.display = "none";
      }
}

const name_input = document.getElementById("name-input");
const from_input = document.getElementById("from-input");
const subject_input = document.getElementById("subject-input");
const message_input = document.getElementById("message-input");
const send_button = document.getElementById("send-btn");

async function sendEmail(name, from, subject, message){
   try {
      await Email.send({
         // oooooops look like someone left our key here :(
         SecureToken : "24b99aa7-eaa7-4fff-a0af-8f85ae57f297",
         To : 'ljhsvikingrobotics@gmail.com',
         From : "ljhsvikingrobotics@gmail.com",
         Subject : `Website Contact Message - ${name}`,
         Body : "Name " + name + "<br> Email: " + from + "<br> Subject: " + subject + "<br> Message: " + message
      });

      alert("message sent successfully!");
   } catch (error) {
      console.error(error);
   }
}


send_button.addEventListener("click", () => {
   sendEmail(name_input.value, from_input.value, subject_input.value, message_input.value);
});


// const readMore = document.getElementById("read-more");
// $(document.body).on('touchmove', () => {resizeReadMore()});
// $(document).ready(() => {resizeReadMore()});
// $(window).scroll(() => {resizeReadMore()});
// $(window).resize(() => {resizeReadMore()});

// function resizeReadMore() {
//    const a = document.documentElement.scrollTop;
//    const b = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//    // Im actually fucking malding rn. What fucking nerd JS developer calls the root node a documentELement. 
//    // I thought that was a placeholder for an actual document element like 'body' or 'footer'. What an absolute fucking nonce. 
//    // End your career IMMEDIATELY and give me $500 JS coins or I will uhh... uh.. auauahhhhhh
//    const c = a / b;
//    console.log(a);
// 	if (b === 0 || c > 0.4) {
//       // readMore.style.display = "none";
//       readMore.style.opacity = 0;
//    } else {
//       // readMore.style.display = "inherit";
//       readMore.style.opacity = 1;
//    }
// }
