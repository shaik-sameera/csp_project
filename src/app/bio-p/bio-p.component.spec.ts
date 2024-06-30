import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioPComponent } from './bio-p.component';

describe('BioPComponent', () => {
  let component: BioPComponent;
  let fixture: ComponentFixture<BioPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
