 var fs = require("fs");
 console.log("\n *STARTING* \n");
// Get content from file
 var contents = fs.readFileSync("dummy.json");
// Define to JSON type
 var jsonContent = JSON.parse(contents);
// Get Value from JSON
console.log("User Name:", jsonContent.username);
console.log("Email:", jsonContent.email);
console.log("Password:", jsonContent.password);
console.log("\n *EXIT* \n");

console.log(
             /* define stringify */
             JSON.stringify(jsonContent, null, 2)
 );

for(var exKey in jsonContent) {
      console.log("key:"+exKey+", value:"+ jsonContent[exKey]);
 }


console.log("\nJson length: " + jsonContent.length());
// console.log("\nJson length: " + Object.keys(jsonContent).length);
