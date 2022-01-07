/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FizikComponent } from './fizik.component';

describe('FizikComponent', () => {
  let component: FizikComponent;
  let fixture: ComponentFixture<FizikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FizikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FizikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
