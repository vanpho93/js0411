// function getLog() {
//     return console.log;
// }

// getLog()(10)

function doSth(fn) {
    console.log(100);
    fn(1234); //console.log(1234);
}

doSth(console.log);
// doSth(10);
