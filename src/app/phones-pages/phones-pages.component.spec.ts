import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesPagesComponent } from './phones-pages.component';

describe('PhonesPagesComponent', () => {
  let component: PhonesPagesComponent;
  let fixture: ComponentFixture<PhonesPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonesPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
