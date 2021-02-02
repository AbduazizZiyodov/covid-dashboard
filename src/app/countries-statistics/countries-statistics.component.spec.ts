import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesStatisticsComponent } from './countries-statistics.component';

describe('CountriesStatisticsComponent', () => {
  let component: CountriesStatisticsComponent;
  let fixture: ComponentFixture<CountriesStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
