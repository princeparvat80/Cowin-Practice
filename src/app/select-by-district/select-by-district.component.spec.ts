import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectByDistrictComponent } from './select-by-district.component';

describe('SelectByDistrictComponent', () => {
  let component: SelectByDistrictComponent;
  let fixture: ComponentFixture<SelectByDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectByDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectByDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
