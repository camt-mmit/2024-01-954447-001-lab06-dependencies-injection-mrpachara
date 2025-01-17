import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ExampleDataService } from '../../services/example-data.service';

@Component({
  selector: 'app-example-display-page',
  imports: [],
  templateUrl: './example-display-page.component.html',
  styleUrl: './example-display-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleDisplayPageComponent {
  protected readonly data = inject(ExampleDataService).get();
}
