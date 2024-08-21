
module.exports = (on, config) => {
    on("task", {
        async consoleLog(message) {
            console.log(message);
            return null;
        }
    })
}
