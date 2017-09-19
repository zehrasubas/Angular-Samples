// Code goes here

//abstract pattern
var f1=function(){
  console.log("f1");
}

var f2=function(f)
{
  f();
}

f2(f1);

//module pattern

var createWorker=function(){
  var job1=function(){
  console.log("job1");
  }
   var job2=function(){
  console.log("job2");
  }
  return {
  task1:job1,task2:job2
  }
}

var worker=createWorker();
worker.task1();
worker.task2();
