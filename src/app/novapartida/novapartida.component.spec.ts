import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovapartidaComponent } from './novapartida.component';

describe('NovapartidaComponent', () => {
  let component: NovapartidaComponent;
  let fixture: ComponentFixture<NovapartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovapartidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovapartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
