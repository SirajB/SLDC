var Task= require('./Task')
var postTsk= require('./postTsk')
class Company{
    constructor(name){
        this.name=name
        this.taskList=[]
        
    }
    postTask(task){
        
        this.taskList.push(new postTsk(this.name,task))
        return `Successfully registered task: ${task}. Waiting on people to accept!`
     }
     showTasks(){
         return this.taskList
     }
}

module.exports = Company