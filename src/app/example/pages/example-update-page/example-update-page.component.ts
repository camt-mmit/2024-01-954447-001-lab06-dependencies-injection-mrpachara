import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TextCollectionComponent } from '../../components/text-collection/text-collection.component';
import { ExampleDataService } from '../../services/example-data.service';

@Component({
  selector: 'app-example-update-page',
  imports: [TextCollectionComponent],
  templateUrl: './example-update-page.component.html',
  styleUrl: './example-update-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleUpdatePageComponent {
  protected readonly service = inject(ExampleDataService);

  protected readonly data = this.service.get();
}
