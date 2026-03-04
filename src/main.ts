// Fichier main.ts
import './style.css'


// Définition de l'interface
interface Plat {
  nom: string;
  prix: number;
  description: string;
}

// Tableau de plats
const carte: Plat[] = [
  { 
    nom: "Anchois 23cm", 
    prix: 7.90, 
    description: "sauce tomate premium, origan, huile d'olive extra vierge, anchois, olive"
  },
  { 
    nom: "Anchois 33cm", 
    prix: 11.90, 
    description: "sauce tomate premium, origan, huile d'olive extra vierge, anchois, olive"
  },
  { 
    nom: "Emmental 23cm", 
    prix: 7.90, 
    description: "sauce tomate premium, origan, huile d'olive extra vierge, emmental, basilic, olive"
  },
];
// On précise <HTMLDivElement> pour que TS connaisse les propriétés de la DIV
const appDiv = document.querySelector<HTMLDivElement>('#app');



// Sécurité indispensable
// Sécurité indispensable 
if (appDiv) {
  appDiv.innerHTML = `
    <h3>EatSmart - La Carte du Restaurant </h3>
    
    <div class="menu-container">
      ${carte.map((p) => `
        <div class="card"> <h3>${p.nom}</h3> <p>${p.description}</p>
          <div class="prix"><strong>${p.prix} €</strong></div>
        </div>
      `).join('')}
    </div>
  `;
}