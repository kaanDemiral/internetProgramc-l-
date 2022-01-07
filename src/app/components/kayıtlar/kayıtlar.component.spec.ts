/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KayıtlarComponent } from './kayıtlar.component';

describe('KayıtlarComponent', () => {
  let component: KayıtlarComponent;
  let fixture: ComponentFixture<KayıtlarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KayıtlarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KayıtlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
