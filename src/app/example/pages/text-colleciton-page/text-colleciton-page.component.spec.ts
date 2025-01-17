import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCollecitonPageComponent } from './text-colleciton-page.component';

describe('TextCollecitonPageComponent', () => {
  let component: TextCollecitonPageComponent;
  let fixture: ComponentFixture<TextCollecitonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextCollecitonPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextCollecitonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
