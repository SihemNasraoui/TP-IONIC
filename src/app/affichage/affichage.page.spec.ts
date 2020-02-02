import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AffichagePage } from './affichage.page';

describe('AffichagePage', () => {
  let component: AffichagePage;
  let fixture: ComponentFixture<AffichagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AffichagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
