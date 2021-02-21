import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mycomponant1Component } from './mycomponant1.component';

describe('Mycomponant1Component', () => {
  let component: Mycomponant1Component;
  let fixture: ComponentFixture<Mycomponant1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mycomponant1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mycomponant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
