import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-book-card",
  templateUrl: "./book-card.component.html",
  styleUrls: ["./book-card.component.css"],
})
export class BookCardComponent implements OnInit, OnChanges, OnDestroy {
  title = "The Hobbit";
  author = "J.R.R. Tolkien";
  year = 1937;

  ngOnInit() {
    console.log("BookCard initialized!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Input changed!", changes);
  }

  ngOnDestroy() {
    console.log("BookCard destroyed!");
  }
}
