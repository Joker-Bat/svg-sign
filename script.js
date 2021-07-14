const sign = document.querySelectorAll("#sign path");

sign.forEach((item) => {
  console.log(`Letter ${item.id} is ${item.getTotalLength()}`);
})