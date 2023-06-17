import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickupCallPage } from './pickup-call.page';

describe('PickupCallPage', () => {
  let component: PickupCallPage;
  let fixture: ComponentFixture<PickupCallPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PickupCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}
