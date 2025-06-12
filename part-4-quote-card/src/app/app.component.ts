import { Component, OnInit, OnDestroy } from "@angular/core";
import { QuoteService } from "./quote.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  template: `
    <h1>Gitesh's Quote Card App</h1>
    <div class="quote-list">
      <app-quote-card
        *ngFor="let quote of quotes; let i = index"
        [quote]="quote"
        (toggleFavorite)="toggleFavorite(i)"
      >
      </app-quote-card>
    </div>
  `,
  styles: [
    `
      h1 {
        text-align: center;
        color: #2c3e50;
        margin: 20px 0;
      }
      .quote-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  quotes: { text: string; author: string; favorite: boolean }[] = [];
  private subscription!: Subscription;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.subscription = this.quoteService.quotes$.subscribe(
      (quotes) => (this.quotes = quotes),
    );
  }

  toggleFavorite(index: number) {
    this.quoteService.toggleFavorite(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
