"use strict";
const xhr = new XMLHttpRequest();
xhr.open(
  "POST",
  "https://prepaid.nsdlbank.co.in/acst_t.jsp?uri=/getDetails.action",
  false
);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send("uri=https://prepaid.nsdlbank.co.in/getDetails.action");
console.log(xhr.responseText);
