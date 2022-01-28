let suerte = Math.random() * 6;
      let dado = parseInt(suerte) + 1;
      let obj1 = document.getElementById("salida");
     
      if (dado > 3) {
        obj1.innerHTML = `Has ganado, ha salido el numero ${dado}`;
      } else {
        obj1.innerHTML = `Lo suento, ha salido el numero ${dado}`;
      }
      if (dado==1){
          obj1.innerHTML = `<img src="images/cara1.png"/>`
      }
      if (dado==2){
          obj1.innerHTML = `<img src="images/cara2.png"/>`
      }
      if (dado==3){
          obj1.innerHTML = `<img src="images/cara3.png"/>`
      }
      if (dado==4){
          obj1.innerHTML = `<img src="images/cara4.png"/>`
      }
      if (dado==5){
          obj1.innerHTML = `<img src="images/cara5.png"/>`
      }
      if (dado==6){
          obj1.innerHTML = `<img src="images/cara6.png"/>`
      }