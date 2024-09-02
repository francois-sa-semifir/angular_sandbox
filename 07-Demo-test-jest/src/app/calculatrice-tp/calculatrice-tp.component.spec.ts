import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatriceTPComponent } from './calculatrice-tp.component';

describe('CalculatriceTPComponent', () => {
  let component: CalculatriceTPComponent;
  let fixture: ComponentFixture<CalculatriceTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatriceTPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatriceTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("J'effectue un calcul", () => {
    it('Je met deux points, alors il y a une erreur', () => {
      component.add('1..1+1');
      expect(() => {
        component.calculate();
      }).toThrowError('Nombre invalide');
    });
    it('Je met un point, alors le point est bien présent lors du calcul', () => {
      component.add('1.1+1');
      component.calculate();
      expect(component.input).toBe('2.1');
    });

    it('Je met deux + successifs, alors il y a une erreur', () => {
      component.add('1++1');
      expect(() => {
        component.calculate();
      }).toThrow;
    });

    it('Je met deux - successifs, alors il y a une erreur', () => {
      component.add('1--1');
      expect(() => {
        component.calculate();
      }).toThrow;
    });


    it('Je met deux * successifs, alors il y a une erreur', () => {
      component.add('1**1');
      expect(() => {
        component.calculate();
      }).toThrow;
    });

    it('Je met deux / successifs, alors il y a une erreur', () => {
      component.add('1//1');
      expect(() => {
        component.calculate();
      }).toThrow;
    });

    it('Je ne met qu\'un seul +, alors un seul + est ajouté)', () => {
      component.add('+');
      expect(component.input).toBe('+');
    });
  });

  // On indique le cadre du test
  describe('Quand je fais une addition', () => {
    // ce que l'on souhaite vérifier précisemment
    it("J'obtiens le résultat de l'addition", () => {
      // Et l'opération et résultat attendu.
      // component. nous permet d'appeler la méthode présente dans le composant
      component.add('2+2');
      component.calculate();
      expect(component.input).toBe('4');
    });
  });
  // Ici, on vérifie que la méthode de nos bouttons fonctionne
  describe('Quand je presse une touche', () => {
    // Pour ajouter un chiffre
    it("J'ajoute le chiffre à la chaine de caractères", () => {
      component.add('2');
      expect(component.input).toBe('2');
    });
    // Pour ajouter un opérateur
    it("J'ajoute l'opérateur à la chaine de caractère", () => {
      component.add('+');
      expect(component.input).toBe('+');
    });
  });

  describe('Quand je presse le bouton =', () => {
    it('Je calcule le résultat', () => {
      component.add('2+2');
      component.calculate();
      expect(component.input).toBe('4');
    });
  });

  describe('Quand je presse le bouton clear', () => {
    it('Je clear la chaine de caractères', () => {
      component.add('2+2');
      component.clear();
      expect(component.input).toBe('');
    });
  });

  describe('Quand je divise par 0', () => {
    it('Il y a une rerreur', () => {
      component.add('2/0');
      expect(component.calculate()).toBe(Infinity);
    });
  })

  describe('Quand le nombre commence par 0', () => {
    it('Il y a une erreur', () => {
      component.add('01+1');
      expect(() => {
        component.calculate();
      }).toThrow
    });
  })
});
