interface ArticlesDTO { 
    id_article: number; 
    nom: string; 
    prix: number; 
}

async function fetchArticles(): Promise<ArticlesDTO[]> { 
const res = await fetch('http://localhost/aymen-api-EatSmart/articles'); 
return await res.json();  
} 

console.log(fetchArticles());

