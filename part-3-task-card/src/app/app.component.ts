import { Component, OnInit, OnDestroy } from "@angular/core";
import { TaskService } from "./task.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  tasks: { title: string; description: string; completed: boolean }[] = [];
  newTask = { title: "", description: "", completed: false };
  private subscription!: Subscription;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.subscription = this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  addTask() {
    if (this.newTask.title && this.newTask.description) {
      this.taskService.addTask({ ...this.newTask });
      this.newTask = { title: "", description: "", completed: false };
    }
  }

  completeTask(index: number) {
    this.taskService.completeTask(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
