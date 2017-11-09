import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsUploadComponent } from './details-upload.component';
import { FileUpload } from '../fileupload'

describe('DetailsUploadComponent', () => {
  let component: DetailsUploadComponent;
  let fixture: ComponentFixture<DetailsUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FileUpload],
      declarations: [ DetailsUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
