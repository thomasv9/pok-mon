  class Personnage {
    constructor(nom,sante_mentale) {
      this.nom = nom;
      this.sante_mentale = sante_mentale;
    }
  }
  
  class Radio {
    constructor() {
    }
    musiqueSuivante() {
      let liste_musique= ["Anissa - Wejdene", "Medelline - Sofiane Pamart", "Double bang 5 - Leto", "No Idea - Don Toliver", "500lbs - Lil Tecca"];
      return liste_musique[Math.floor(Math.random() * liste_musique.length)];
    }
  }
  
  class Trajet {
    constructor(passager,nb_feux) {
      this.passager = passager;
      this.nb_feux_restant = nb_feux;
      this.nb_changement=0
    }
    
    faireTrajet() {
      const radio_voiture = new Radio()
      while (this.nb_feux_restant > 0 && this.passager.sante_mentale > 0) {
          let musique=radio_voiture.musiqueSuivante();
          this.nb_feux_restant--
          if (musique === "Anissa - Wejdene") {
              console.log("Changement de taxi")
              this.passager.sante_mentale--;
              this.nb_changement++;
          }
          console.log("Musique: " + musique + ", Feux restants: " + this.nb_feux_restant);		
      }
      if (this.nb_feux_restant === 0) {
          console.log("John est bien arrivé en " + this.nb_changement + " changements de taxi.");
      } else {
          console.log("Explosion");
      }
    }
  }
  const john=new Personnage("john",10);
  const retour_maison=new Trajet(john,30);
  retour_maison.faireTrajet();
  