import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImageZoomNewComponent } from './ngx-image-zoom-new.component';

describe('NgxImageZoomNewComponent', () => {
  let component: NgxImageZoomNewComponent;
  let fixture: ComponentFixture<NgxImageZoomNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxImageZoomNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxImageZoomNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
