import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrachenstubeComponent } from './drachenstube.component';

describe('DrachenstubeComponent', () => {
  let component: DrachenstubeComponent;
  let fixture: ComponentFixture<DrachenstubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrachenstubeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrachenstubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
