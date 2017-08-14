// document.querySelector('form').addEventListener("submit", function() {
//   var elements = document.getElementsByTagName("INPUT");
//   console.log('Katia');
//   for (var i = 0; i < elements.length; i++) {
//     elements[i].oninvalid = function(e) {
//       e.target.setCustomValidity("");
//       if (!e.target.validity.valid) {
//         e.target.setCustomValidity("This field cannot be left blank");
//       }
//     };
//     elements[i].oninput = function(e) {
//       e.target.setCustomValidity("");
//     };
//   }
// });


//maybe have 2 add event listeners
// so one can check before submit ('input')
// the other can check whether all the values input are correct ('submit')
