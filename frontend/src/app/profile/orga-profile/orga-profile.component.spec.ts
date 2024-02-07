import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgaProfileComponent } from './orga-profile.component';

describe('OrgaProfileComponent', () => {
  let component: OrgaProfileComponent;
  let fixture: ComponentFixture<OrgaProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrgaProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrgaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
