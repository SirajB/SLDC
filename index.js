
var User = require('./User');
var Company = require('./Company');

// const World = {
//     companies: [],
//     users :[],
//     newCompany(name){
//         companies.push(new Company(name))
        
//     }
// }
// for (company in World.companies){
//     console.log(Company.taskList)
// }








const repl = require("repl");
const replServer = repl.start("> ");


replServer.context.User = User
replServer.context.Company = Company