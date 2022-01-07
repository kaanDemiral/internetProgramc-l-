/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TurkceComponent } from './turkce.component';

describe('TurkceComponent', () => {
  let component: TurkceComponent;
  let fixture: ComponentFixture<TurkceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurkceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurkceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
