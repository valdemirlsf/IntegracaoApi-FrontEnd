import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerguntaComponent } from './pergunta-component.component';

describe('PerguntaComponent', () => {
  let component: PerguntaComponent;
  let fixture: ComponentFixture<PerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerguntaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
