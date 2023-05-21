import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebapiComponent } from './webapi.component';

describe('WebapiComponent', () => {
  let component: WebapiComponent;
  let fixture: ComponentFixture<WebapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebapiComponent]
    });
    fixture = TestBed.createComponent(WebapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
