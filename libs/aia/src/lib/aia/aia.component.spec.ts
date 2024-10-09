import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AiaComponent } from './aia.component';

describe('AiaComponent', () => {
  let component: AiaComponent;
  let fixture: ComponentFixture<AiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
