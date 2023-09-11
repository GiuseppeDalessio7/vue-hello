/*Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.


Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa inserendo il percoso in una propietá dell'oggetto restituito dalla funzione data. */



  const { createApp } = Vue

  createApp({
    data() {
      return {
        title : "Ciao , ti aiuterò con Vue Js",
        myImg : "https://picsum.photos/450/450"
        
      }
    }
  }).mount('#app')