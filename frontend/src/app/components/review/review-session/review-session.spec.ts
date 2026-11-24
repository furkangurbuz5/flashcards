import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewSession } from './review-session';

describe('ReviewSession', () => {
  let component: ReviewSession;
  let fixture: ComponentFixture<ReviewSession>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewSession]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReviewSession);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
