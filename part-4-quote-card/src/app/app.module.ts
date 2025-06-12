import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { QuoteCardComponent } from "./quote-card/quote-card.component";
import { QuoteLengthPipe } from './quote-length.pipe';
import { HighlightFavoriteDirective } from './highlight-favorite.directive';

@NgModule({
  declarations: [AppComponent, QuoteCardComponent, QuoteLengthPipe, HighlightFavoriteDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
