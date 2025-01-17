import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  linkedSignal,
  output,
} from '@angular/core';
import { TextInputComponent } from '../text-input/text-input.component';

@Component({
  selector: 'app-text-collection',
  imports: [TextInputComponent],
  templateUrl: './text-collection.component.html',
  styleUrl: './text-collection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextCollectionComponent {
  readonly data = input.required<string[] | null>();

  readonly dataChanges = output<string[]>();

  protected readonly items = linkedSignal(() =>
    (this.data() ?? ['']).map((value) => ({ value })),
  );

  constructor() {
    effect(() => this.dataChanges.emit(this.items().map((item) => item.value)));
  }

  protected addItem(): void {
    this.items.update((items) => {
      items.push({ value: '' });

      return [...items];
    });
  }

  protected deleteItem(index: number): void {
    this.items.update((items) => {
      items.splice(index, 1);

      return [...items];
    });
  }

  protected changeItemValue(index: number, value: string): void {
    this.items.update((items) => {
      items[index].value = value;

      return [...items];
    });
  }
}
