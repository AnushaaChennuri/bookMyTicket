import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserdataComponent } from './viewuserdata.component';

describe('ViewuserdataComponent', () => {
  let component: ViewuserdataComponent;
  let fixture: ComponentFixture<ViewuserdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewuserdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewuserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
