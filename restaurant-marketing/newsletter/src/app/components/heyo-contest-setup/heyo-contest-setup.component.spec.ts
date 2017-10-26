import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeyoContestSetupComponent } from './heyo-contest-setup.component';

describe('HeyoContestSetupComponent', () => {
  let component: HeyoContestSetupComponent;
  let fixture: ComponentFixture<HeyoContestSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeyoContestSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeyoContestSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
