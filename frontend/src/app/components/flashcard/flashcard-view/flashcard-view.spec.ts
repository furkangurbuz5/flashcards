import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlashcardView } from './flashcard-view';

describe('FlashcardView', () => {
  let component: FlashcardView;
  let fixture: ComponentFixture<FlashcardView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardView]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FlashcardView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
