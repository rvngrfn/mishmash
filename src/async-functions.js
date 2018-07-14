function giveItBackLater(value, callback){
    function loadComplete() {
        callback(value)
    }
    setTimeout(loadComplete, 100)

}

function addSomePromises(){
/*    const promise = new Promise((resolve, reject) => {
        const rejectedPromise = Promise.reject("failure")
        const p1 = addSomePromises(Promise.resolve("success"))
        var p2 = addSomePromises(rejectedPromise)

      })
}
promise
.then(value => console.log("", value))
.catch(value => console.error("", value)) */
} 

function promiseToGiveItBackLater(value){
    const promise = new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, value)
    })
    return promise;

}

module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater}