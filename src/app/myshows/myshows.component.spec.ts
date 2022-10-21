import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyshowsComponent } from './myshows.component';

describe('MyshowsComponent', () => {
  let component: MyshowsComponent;
  let fixture: ComponentFixture<MyshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyshowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
