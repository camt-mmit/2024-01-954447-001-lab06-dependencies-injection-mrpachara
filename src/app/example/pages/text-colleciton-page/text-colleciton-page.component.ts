import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TextCollectionComponent } from '../../components/text-collection/text-collection.component';
import { ExampleDataService } from '../../services/example-data.service';

@Component({
  selector: 'app-text-colleciton-page',
  imports: [TextCollectionComponent],
  templateUrl: './text-colleciton-page.component.html',
  styleUrl: './text-colleciton-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextCollecitonPageComponent {
  protected readonly service = inject(ExampleDataService);

  protected readonly data = this.service.get();
}
