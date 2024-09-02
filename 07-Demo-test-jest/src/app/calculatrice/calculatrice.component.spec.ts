// On ne se soucie pas de cette partie pour le moment
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CalculatriceComponent } from './calculatrice.component';

describe('CalculatriceComponent', () => {
  let component: CalculatriceComponent;
  let fixture: ComponentFixture<CalculatriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CalculatriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
// ============================================================//
  // On indique le cadre du test
  describe('Quand je presse calculer', () => {
    // ce que l'on souhaite vérifier précisemment
    it("J'obtiens le résultat du calcul", () => {
      // Et l'opération et résultat attendu.
      // `component.` nous permet d'appeler la méthode présente dans le composant
      component.add('1+1');
      component.calculate();
      expect(component.input).toBe('2');
    })
  })

  // Ici, on vérifie que la méthode de nos bouttons fonctionne
  describe('Quand je presse une touche', ()=> {
    // Pour ajouter un chiffre
    it('J\'ajoute le chiffre à la chaine de caractères', () => {
      component.add('2')
      expect(component.input).toBe('2')
    })
    // Pour ajouter un opérateur
    it("J'ajoute l'opérateur à la chaine de caractère", () => {
      component.add('+')
      expect(component.input).toBe('+')
    })
  })

// =======================Exercice : Test Fake Async=============================//
  // describe('lorsque je presse un boutton', () =>{
  //   it('Un bouton numérique ou d\'opérateur appelle la méthode add()', fakeAsync(() => {
  //     jest.spyOn(component, 'add');
  //     fixture.nativeElement.querySelector('#button1').click();
  //     tick();
  //     expect(component.add).toHaveBeenCalled();
  //   }));
  //   it('le bouton C appelle la méthode clear()', fakeAsync(() => {
  //     jest.spyOn(component, 'clear');
  //     const clearButton = fixture.nativeElement.querySelector('#c');
  //     expect(clearButton).not.toBeNull();
  //     clearButton.click();
  //     tick();
  //     expect(component.clear).toHaveBeenCalled()
  //   }));
  // })
});