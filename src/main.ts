
import './style.css'

// Interface TypeScript  d'un article

interface ArticlesDTO { 
    id_article: number;   // identifiant de l'article
    nom: string;          // nom du plat
    prix: number;         // prix du plat
    description: string;  // description du plat
}

//  chercher les articles depuis l'API

async function fetchArticles(): Promise<ArticlesDTO[]> { 
    
    const res = await fetch('http://localhost/aymen-api-EatSmart/articles'); 
  
    return await res.json();  
} 

// Fonction principale  initialiser l'application
async function init() { 
    
    console.log("Chargement du menu..."); 

    const menuData = await fetchArticles(); 

    // Création du panier 
    
    const panier: ArticlesDTO[] = [];

    
    
    const appDiv = document.querySelector<HTMLDivElement>('#app'); 

 
    if (appDiv) { 
        // Injecte tout le HTML dans la page
        appDiv.innerHTML = `
        <h1>EatSmart - Carte du restaurant</h1>

            <!-- Liste des plats -->
            <ul class="menu">
                ${
                    // parcourt tous les articles du tableau menuData
                    // Pour chaque article, on crée une carte HTML
                    menuData.map(art => ` 
                    <li class="card">

                        ${art.prix < 10 ? `<span class="badge">Bon Plan</span>` : ``} 

                      
                        <h3>${art.nom}</h3>

                        
                        <p><strong>${art.description}</strong></p>

                        <p>ID : ${art.id_article}</p>

                       
                        <p>Prix : ${art.prix} €</p>

                        <!-- Bouton pour ajouter le plat au panier -->
                        <button class="btn-order">Ajouter</button>
                    </li>
                `).join('') /* join('') rassemble toutes les cartes en une seule chaîne HTML */
                }
            </ul>

            <!-- Zone panier -->
            <header>
            </header>

            <main class="menu-container">
              ...
            </main>

            <aside class="cart-container">
                <h2>Votre Panier</h2>

                <!-- Zone où les articles du panier seront affichés -->
                <div id="cart-items">
                  <p>Votre panier est vide</p>
                </div>

                <hr>

                <!--  total -->
                <div class="cart-total">
                  <strong>Total : <span id="total-prix">0.00</span>€</strong>
                </div>
            </aside>
            </div>
        `;

        // Récupère tous les boutons qui ont la classe btn-order
        const buttons = document.querySelectorAll<HTMLButtonElement>('.btn-order');

        
        buttons.forEach((button, index) => {

            // Ajoute un événement click sur chaque bouton
            button.addEventListener('click', () => {

                
                console.log(`Bouton n°${index} cliqué`);

                // Affiche dans la console le nom du plat correspondant
                //  l'index du bouton pour retrouver le bon article dans menuData
                console.log(`Nom du plat : ${menuData[index].nom}`);

                //Ajoute le plat sélectionné dans le tableau panier
                panier.push(menuData[index]);

                
                console.log("État du panier :", panier);
            });
        });
    } 
} 

// Lance la fonction principale 
init();