import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHomePageComponent } from './content-home-page.component';

describe('ContentHomePageComponent', () => {
  let component: ContentHomePageComponent;
  let fixture: ComponentFixture<ContentHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
