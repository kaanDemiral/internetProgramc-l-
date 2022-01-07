/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MatematikComponent } from './matematik.component';

describe('MatematikComponent', () => {
  let component: MatematikComponent;
  let fixture: ComponentFixture<MatematikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatematikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatematikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
