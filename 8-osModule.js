const os = require('os');

//Info about the current user
const user = os.userInfo();
console.log(user);

//Method return the system runtime
console.log(`System RunTime is ${os.uptime()} secondes`);


const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOs);