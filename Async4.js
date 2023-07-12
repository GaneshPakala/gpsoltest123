const async = require("async")

function rectangle (a,b) {
return new Promise ((resolve) => {
setTimeout(() => {
resolve (2*(a+b));
}, 2000);
});
}

async function output (a,b) {
const ans = await rectangle(a,b);
console.log(ans);
}
output(10,20);