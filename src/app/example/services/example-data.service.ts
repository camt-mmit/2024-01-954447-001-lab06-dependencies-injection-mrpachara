import { Injectable } from '@angular/core';

const keyName = 'example-data';

@Injectable({
  providedIn: 'root',
})
export class ExampleDataService {
  get(): string[] | null {
    const jsonText = localStorage.getItem(keyName);

    return JSON.parse(jsonText ?? 'null');
  }

  set(data: string[]): void {
    const jsonText = JSON.stringify(data);

    localStorage.setItem(keyName, jsonText);
  }
}
