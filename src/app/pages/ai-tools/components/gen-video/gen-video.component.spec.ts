import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenVideoComponent } from './gen-video.component';

describe('GenVideoComponent', () => {
  let component: GenVideoComponent;
  let fixture: ComponentFixture<GenVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GenVideoComponent]
    });
    fixture = TestBed.createComponent(GenVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
