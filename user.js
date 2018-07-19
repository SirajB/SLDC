var Task= require('./Task')
class User {
    constructor (name){
    this.name=name;
    this.acceptedTask=[];
    var a = []
    var z = 0
    while (z < 1000) {
        var randomnumber = Math.floor(Math.random() * 100000);
        if (a.indexOf(randomnumber) == -1){
         a[z] = randomnumber;
          z++;
            }    
        }
    this.id=a[z-1]
    }

    showTasks(){
        var task = new Task()
        return task.showTask()
    }

    acceptTask(i){
        var numbers=Number
        var taskList = new Task().showTask()
        console.log(`There are currently ${taskList.length} task(s) availible`)        
        if (i>taskList.length){
            return(`You cannot choose a task that is unavailible`)
        }else if (i<1){
            return(`Please pick a task that is between 1 and ${taskList.length}`)
        }else{
            this.acceptedTask.push(taskList[i-1])
            return( `You have accepted task: ${taskList[i-1]}`)
        }
    }
    
    finishTask(i){
        console.log(`You currently have ${this.acceptedTask.length} task(s) accepted.\nThe task(s) you have accepted is/are ${this.acceptedTask}.`)
        if (i>this.acceptedTask.length){
            return `You cannot accept a task which does not exist`
        }else if (i<1){
            return `Please pick a task to complete from 1 to ${this.acceptedTask.length}`
        } else {
            this.acceptedTask.splice(i-1,1)
            return `Successfully marked task as complete. New list of accepted tasks ${this.acceptedTask}`
        }

    }
        
}
    
    





module.exports = User