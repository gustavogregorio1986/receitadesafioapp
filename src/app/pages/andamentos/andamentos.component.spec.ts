import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndamentosComponent } from './andamentos.component';

describe('AndamentosComponent', () => {
  let component: AndamentosComponent;
  let fixture: ComponentFixture<AndamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
