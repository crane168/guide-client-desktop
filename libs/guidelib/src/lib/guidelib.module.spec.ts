import { async, TestBed } from '@angular/core/testing';
import { GuidelibModule } from './guidelib.module';

describe('GuidelibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GuidelibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GuidelibModule).toBeDefined();
  });
});
