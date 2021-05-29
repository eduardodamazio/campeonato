import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroclubeComponent } from './cadastroclube.component';

describe('CadastroclubeComponent', () => {
  let component: CadastroclubeComponent;
  let fixture: ComponentFixture<CadastroclubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroclubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroclubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
