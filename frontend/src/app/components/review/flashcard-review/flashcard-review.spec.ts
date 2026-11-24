import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlashcardReview } from './flashcard-review';

describe('FlashcardReview', () => {
  let component: FlashcardReview;
  let fixture: ComponentFixture<FlashcardReview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardReview]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FlashcardReview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
