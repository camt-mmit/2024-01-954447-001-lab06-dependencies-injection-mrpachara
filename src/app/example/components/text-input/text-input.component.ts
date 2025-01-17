import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-text-input',
  imports: [],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent {
  readonly labelNumber = input.required<number>();
  readonly data = input.required<string>();
  readonly deletionDisabled = input(false);

  readonly dataChanges = output<string>();
  readonly dataDeletes = output<void>();
}
