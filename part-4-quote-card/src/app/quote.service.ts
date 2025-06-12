import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class QuoteService {
  private quotes = new BehaviorSubject<
    { text: string; author: string; favorite: boolean }[]
  >([
    { text: "Be the change.", author: "Gandhi", favorite: true },
    {
      text: "Stay hungry, stay foolish.",
      author: "Steve Jobs",
      favorite: false,
    },
    {
      text: "Do great work by loving what you do.",
      author: "Steve Jobs",
      favorite: true,
    },
  ]);

  quotes$ = this.quotes.asObservable();

  toggleFavorite(index: number) {
    const quotes = this.quotes.getValue();
    quotes[index].favorite = !quotes[index].favorite;
    this.quotes.next([...quotes]);
  }
}
