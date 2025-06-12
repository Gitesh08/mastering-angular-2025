import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "quoteLength",
})
export class QuoteLengthPipe implements PipeTransform {
  transform(value: string): string {
    const words = value.split(" ").length;
    return words < 5 ? "Short" : words < 10 ? "Medium" : "Long";
  }
}
