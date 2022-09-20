import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffLevelsComponent } from './diff-levels.component';

describe('DiffLevelsComponent', () => {
  let component: DiffLevelsComponent;
  let fixture: ComponentFixture<DiffLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffLevelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
