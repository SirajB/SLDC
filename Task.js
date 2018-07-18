var Company = require ('./Company')
class Task{
    constructor() {
      this.taskList=["Food Drive","Charity Workers","Support Group Leader","Rubbish Collecter","Advertiser"] 
      this.showTask()
    }
    showTask(){
      // var task = new Company()
      return this.showTasks()
    }
    
}
module.exports = Task
