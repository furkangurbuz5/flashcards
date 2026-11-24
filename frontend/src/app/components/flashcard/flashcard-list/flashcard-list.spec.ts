import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlashcardList } from './flashcard-list';

describe('FlashcardList', () => {
  let component: FlashcardList;
  let fixture: ComponentFixture<FlashcardList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardList]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FlashcardList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
