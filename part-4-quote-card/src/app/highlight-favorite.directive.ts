import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
  selector: "[appHighlightFavorite]",
})
export class HighlightFavoriteDirective implements OnInit {
  @Input() appHighlightFavorite: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.appHighlightFavorite) {
      this.el.nativeElement.style.border = "2px solid #ffd700";
      this.el.nativeElement.style.backgroundColor = "#fffacd";
    }
  }
}
