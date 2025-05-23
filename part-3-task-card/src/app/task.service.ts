import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  private tasks = new BehaviorSubject<
    { title: string; description: string; completed: boolean }[]
  >([
    {
      title: "Write Blog",
      description: "Finish Angular series",
      completed: false,
    },
    { title: "Code Review", description: "Review team’s PRs", completed: true },
  ]);

  tasks$ = this.tasks.asObservable();

  addTask(task: { title: string; description: string; completed: boolean }) {
    const currentTasks = this.tasks.getValue();
    this.tasks.next([...currentTasks, task]);
  }

  completeTask(index: number) {
    const currentTasks = this.tasks.getValue();
    currentTasks[index].completed = true;
    this.tasks.next([...currentTasks]);
  }
}
