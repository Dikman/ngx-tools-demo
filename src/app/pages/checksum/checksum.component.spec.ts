import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksumComponent } from './checksum.component';

describe('ChecksumComponent', () => {
  let component: ChecksumComponent;
  let fixture: ComponentFixture<ChecksumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecksumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecksumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
