import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimWhitespace'
})
export class TrimWhitespacePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return ''; // Handle null or undefined input
    return value.trim();
  }
}