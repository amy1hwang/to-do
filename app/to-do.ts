class Task {
  done: boolean = false;

  constructor(public description: string, public priority: string) {}

  markDone() {
    this.done = true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('feed Maple', 'medium'));
tasks.push(new Task('clean the house', 'medium'));
tasks.push(new Task('cook dinner', 'low'));

tasks[0].markDone();

for(var task of tasks) {
  console.log(task);
}
