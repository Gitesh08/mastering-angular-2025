import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-task-card",
  templateUrl: "./task-card.component.html",
  styleUrls: ["./task-card.component.css"],
})
export class TaskCardComponent implements OnInit, OnChanges, OnDestroy {
  @Input() task: { title: string; description: string; completed: boolean } = {
    title: "",
    description: "",
    completed: false,
  };
  @Output() complete = new EventEmitter<void>();

  ngOnInit() {
    console.log("TaskCard initialized with:", this.task);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("TaskCard input changed:", changes);
  }

  ngOnDestroy() {
    console.log("TaskCard destroyed!");
  }

  onComplete() {
    this.complete.emit();
  }
}
