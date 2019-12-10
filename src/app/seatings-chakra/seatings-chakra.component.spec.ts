import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatingsChakraComponent } from './seatings-chakra.component';

describe('SeatingsChakraComponent', () => {
  let component: SeatingsChakraComponent;
  let fixture: ComponentFixture<SeatingsChakraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatingsChakraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatingsChakraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
