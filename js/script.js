
var INDEX_STORAGE = "TO DO LIST";
console.log(localStorage);

var vue = new Vue({
    el:'#app',
    data:{
        tasks: JSON.parse(localStorage.getItem(INDEX_STORAGE)) || []
    },
    methods:{
        addTask: function(){
            this.tasks = JSON.parse(localStorage.getItem(INDEX_STORAGE)) || [];
            if(this.task != "") {
                var obj = {
                    id: this.tasks.length + 1,
                    done: false,
                    task: this.task
                };
                this.tasks.push(obj);
                var object = JSON.stringify(this.tasks);
                localStorage.setItem(INDEX_STORAGE, object);
            }
        },
        removeTask: function(identificator){
            this.tasks = JSON.parse(localStorage.getItem(INDEX_STORAGE)) || [];
            for(var i = 0; i < this.tasks.length; i++){
                var task_id = this.tasks[i].id;
                if(task_id == identificator){
                    this.tasks.splice(i,1);
                    var object = JSON.stringify(this.tasks);
                    localStorage.setItem(INDEX_STORAGE, object);
                }
            }
        },
        syncTask(identificator){
            console.log(identificator);
            var object = JSON.stringify(this.tasks);
            localStorage.setItem(INDEX_STORAGE, object);
        },
        renderAllTask(){
            this.tasks = JSON.parse(localStorage.getItem(INDEX_STORAGE)) || [];
        },
        renderResolvedTask(){
            this.tasks = JSON.parse(localStorage.getItem(INDEX_STORAGE)) || [];
            var arr = [];
            for(var i = 0; i < this.tasks.length; i++) {
                var task_done = this.tasks[i].done;
                if (task_done === true) {
                    arr.push({
                        id: this.tasks[i].id,
                        done: this.tasks[i].done,
                        task: this.tasks[i].task
                    });
                }
            }
            this.tasks = arr;
        },
        renderNotResolvedTask(){
            this.tasks = JSON.parse(localStorage.getItem(INDEX_STORAGE)) || [];
            var arr = [];
            for(var i = 0; i < this.tasks.length; i++) {
                var task_done = this.tasks[i].done;
                if (task_done === false) {
                    arr.push({
                        id: this.tasks[i].id,
                        done: this.tasks[i].done,
                        task: this.tasks[i].task
                    });
                }
            }
            this.tasks = arr;
        }
    }
});