import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string, match: string): SafeHtml {
    const regExp: RegExp = new RegExp(match, 'gi');
    return this.sanitizer.bypassSecurityTrustHtml(value.replace(regExp, `<span style="background: yellow">${match}</span>`));
  }

}
