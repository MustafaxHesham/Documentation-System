import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDesignOverviewComponent } from './software-design-overview.component';

describe('SoftwareDesignOverviewComponent', () => {
  let component: SoftwareDesignOverviewComponent;
  let fixture: ComponentFixture<SoftwareDesignOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareDesignOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareDesignOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
