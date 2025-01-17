import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCollectionComponent } from './text-collection.component';

describe('TextCollectionComponent', () => {
  let component: TextCollectionComponent;
  let fixture: ComponentFixture<TextCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
