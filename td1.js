const destination = [
{ id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7,
disponible: true },
{ id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10,
disponible: true },
{ id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5,
disponible: false },
{ id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4,
disponible: true },
{ id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12,
disponible: true },
{ id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6,
disponible: false }
];
destination.forEach(d => console.log(d.ville));
const villes=destination.map(d=>d.ville);
console.log(villes);
const prix1500=destination.filter(d=>d.prix < 1500);
//ou bien 
destination.filter(d=>{return d.prix<1500});
const destination_id3=destination.find(d=>d.id===3);
console.log(destination_id3);
const destination_id33=destination.findIndex(d=>d.id===3);
prix1500[0].prix+=1000;
console.log(prix1500);
console.log(destination);
const tokyo=destination.findIndex(d=>d.ville==="Tokyo");
console.log(tokyo);
const t = destination.reduce((s, d) => s + d.prix, 0);
console.log(t);
const t1=[10,12,3,10,7];
const[a,b]=t1;
const[a1, ,b2]=t1;
console.log(a1);
console.log(b2);
const[ , ,...t2]=t1;
console.log(t2);
const produit = { id: 1, nom: "stylo", prixx: 20, stock: 10 };
const { nom, prixx } = produit;
console.log(nom, prixx);                      // stylo 20

const { nom: designation, prixx: p } = produit;
console.log(designation, p);   // stylo 20
const panier = [
  { id: 1, nom: "stylo",  prix: 20, stock: 10 },
  { id: 2, nom: "crayon", prix: 5,  stock: 20 },
  { id: 3, nom: "cahier", prix: 15, stock: 5 }
];

const nomprix = panier.map(({ nom, prix }) => ({ nom, prix }));
console.log(nomprix);
const nvproduit={id:4,nom:"gomme",prix:2,stock:50};
const nvpanier=[...panier,nvproduit];
console.log(nvpanier);
//ex4
const copie=[...destinationeurope];
console.log(copie);
const fusion = [...destinationeurope,...destinationasie];
console.log(fusion);
const ajout=["lisbone",...destinationeurope];
const ajoutfin=[...designation, "lisbone"]; 