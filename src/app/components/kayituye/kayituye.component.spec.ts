/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KayituyeComponent } from './kayituye.component';

describe('KayituyeComponent', () => {
  let component: KayituyeComponent;
  let fixture: ComponentFixture<KayituyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KayituyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KayituyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
