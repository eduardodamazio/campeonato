import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrojogadorComponent } from './cadastrojogador.component';

describe('CadastrojogadorComponent', () => {
  let component: CadastrojogadorComponent;
  let fixture: ComponentFixture<CadastrojogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrojogadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrojogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
