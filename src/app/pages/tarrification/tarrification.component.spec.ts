import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarrificationComponent } from './tarrification.component';

describe('TarrificationComponent', () => {
  let component: TarrificationComponent;
  let fixture: ComponentFixture<TarrificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarrificationComponent]
    });
    fixture = TestBed.createComponent(TarrificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
