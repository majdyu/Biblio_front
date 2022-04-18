import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnLivreComponent } from './return-livre.component';

describe('ReturnLivreComponent', () => {
  let component: ReturnLivreComponent;
  let fixture: ComponentFixture<ReturnLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
