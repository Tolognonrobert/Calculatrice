import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EcolePage } from './ecole.page';

describe('EcolePage', () => {
  let component: EcolePage;
  let fixture: ComponentFixture<EcolePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcolePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EcolePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
