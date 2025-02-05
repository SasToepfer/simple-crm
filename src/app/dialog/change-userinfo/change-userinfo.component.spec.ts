import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeUserinfoComponent } from './change-userinfo.component';

describe('ChangeUserinfoComponent', () => {
  let component: ChangeUserinfoComponent;
  let fixture: ComponentFixture<ChangeUserinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeUserinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeUserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
