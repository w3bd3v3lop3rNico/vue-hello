console.log(Vue)
const { createApp } = Vue

console.log(createApp)
createApp({
    data() {
        
      return {
        message: 'Hello Vue!',
        imgSrc: "./img/01.webp",
        display: "d-none",
      }
    },
    methods: {
        
    }
  }).mount('#app')

// console.log(message);

// VERSIONE ESTESA DELLA GLOBAL BUILD DA CDN
// 
//  DESTRUTTURO L'OGGETTO "Vue" SALVANDO IN UNA VARIABILE LA PROPRIETA' "createApp"
// 
//  const createApp = Vue.createApp;
// 
//  DICHIARO UNA VARIBILE CHE CONTIENE UN OGGETTO
// 
//  const parameters = {
// 
//      USO IL METODO "data" con dentro DICHIARATA UNA FUNZIONE CHE    RITORNA I DATI
// 
//      data: function () {
//          return {
//              message : 'Hello Vue!'
//          }
//      },
// 
//      PROPRIETA' "methods" che contiene le FUNZIONI:
// 
//      methods: {
//          onClick: function () {
//              
//          },
//          getRandomInt(min, max) {
// 
//          },
//      },
//  };
// 
//  SALVO IN UNA VARIBILE IL METODO "createApp" con i PARAMETRI
// 
//  const app = createApp(parameters);
// 
//  USO IL METODO ".mount" PER INSRIRE NELL'HTML TRAMITE ID IL CONTENUTO DELLA VARIABILE app
// 
//  app.mount('#app')