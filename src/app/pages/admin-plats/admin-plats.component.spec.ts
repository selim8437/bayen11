import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlatsComponent } from './admin-plats.component';

describe('AdminPlatsComponent', () => {
  let component: AdminPlatsComponent;
  let fixture: ComponentFixture<AdminPlatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPlatsComponent]
    });
    fixture = TestBed.createComponent(AdminPlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
