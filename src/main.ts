import './style.css'

interface ArticlesDTO { 
    id_article: number; 
    nom: string; 
    prix: number; 
    description: string;
}

async function fetchArticles(): Promise<ArticlesDTO[]> { 
    const res = await fetch('http://localhost/aymen-api-EatSmart/articles'); 
    return await res.json();  
} 

async function init() { 
    console.log("Chargement du menu..."); 

    const menuData = await fetchArticles(); 

    const appDiv = document.querySelector<HTMLDivElement>('#app'); 

async function init() {
    const appDiv = document.querySelector<HTMLDivElement>('#app'); 







if (appDiv) { 
// ÉTAPE A : On injecte le HTML (on crée les boutons) 
    appDiv.innerHTML = ` <ul class="panier"> ${panier.map(...)} ... `; 
// ÉTAPE B : Maintenant qu'ils existent, on peut leur atttacher des évènements  
// Récupère TOUS les boutons ayant la classe "btn-order" 
const tousLesBoutons = document.querySelectorAll<HTMLButtonElement>('.btn order'); 


    if (appDiv) { 
        appDiv.innerHTML = `<ul class="menu"> ${menuData.map(art => ` 

            
                    <li class="card">
                     ${art.prix < 10 ? `<span class="badge">Bon Plan</span>` : ``} 
                        <h3>${art.nom}</h3>
                        <p><strong>${art.description} €</strong></p>
                        <p>ID : ${art.id_article}</p>
                        <p> prix : ${art.prix}</p>
                    </li>
                `).join('')}
            </ul>
        `;




    } 
} 

init();

