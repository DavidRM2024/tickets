import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketShowComponent } from './ticket-show.component';

describe('TicketComponent', () => {
  let component: TicketShowComponent;
  let fixture: ComponentFixture<TicketShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketShowComponent]
    });
    fixture = TestBed.createComponent(TicketShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
