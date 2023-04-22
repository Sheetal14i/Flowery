import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotlogingComponent } from './notloging.component';

describe('NotlogingComponent', () => {
  let component: NotlogingComponent;
  let fixture: ComponentFixture<NotlogingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotlogingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotlogingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
