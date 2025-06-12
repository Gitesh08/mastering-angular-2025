import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-quote-card",
  template: `
    <div
      class="card"
      [appHighlightFavorite]="quote.favorite"
      (click)="toggleFavorite.emit()"
    >
      <p>"{{ quote.text }}"</p>
      <p><strong>Author:</strong> {{ quote.author }}</p>
      <p><strong>Length:</strong> {{ quote.text | quoteLength }}</p>
    </div>
  `,
  styles: [
    `
      .card {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 16px;
        margin: 10px;
        max-width: 300px;
        text-align: left;
        cursor: pointer;
      }
      p {
        margin: 8px 0;
      }
      strong {
        color: #555;
      }
    `,
  ],
})
export class QuoteCardComponent {
  @Input() quote: { text: string; author: string; favorite: boolean } = {
    text: "",
    author: "",
    favorite: false,
  };
  @Output() toggleFavorite = new EventEmitter<void>();
}
