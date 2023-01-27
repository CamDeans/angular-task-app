import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
// import both TASK from Task which is up (2) levels ../../
import { Task } from '../../Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  // set to an empty array to begin with and call the service method ()
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // you need to subscribe and watch an Observable using the codde snippet below
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    // you need to subscribe and watch an Observable using the code snippet below and filter task id from the UI
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
    );
  }

  toggleReminder(task: Task) {
    // switch to the opposite of reminder on toggle
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
  addTask(task: Task) {
    // you need to subscribe and watch an Observable using the codde snippet below
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }
}
