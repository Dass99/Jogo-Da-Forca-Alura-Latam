      var tela = document.querySelector('canvas');
      var pincel = tela.getContext('2d');
      
      function base(){ //base da forca
            pincel.beginPath()
            pincel.moveTo(150,300)
            pincel.lineTo(250,300)
            pincel.strokeStyle = 'white'
            pincel.lineWidth = 10
            pincel.stroke()
        }

        //madeira vertical da forca
      function um(){  
            pincel.beginPath()
            pincel.moveTo(200,50)
            pincel.lineTo(200,300)
            pincel.lineWidth = 10;
            pincel.strokeStyle = 'white'
            pincel.stroke()
        }
        //madeira horizontal da forca
      function dois(){  
            pincel.beginPath() 
            pincel.moveTo(195,50)
            pincel.lineTo(350,50)
            pincel.lineWidth = 10;
            pincel.strokeStyle = 'white'
            pincel.stroke()
        }
        //laço da forca
      function tres(){
            pincel.beginPath()
            pincel.moveTo(350,47)
            pincel.lineTo(350,80)
            pincel.lineWidth = 1;
            pincel.stroke();
        }
      //cabeça
      function cabeça(){
            pincel.beginPath();
            pincel.lineWidth = 3;
            pincel.arc(350,110, 30, 0, Math.PI * 2, true);
            pincel.strokeStyle = 'white'
            pincel.stroke();
      }
      //corpo
      function corpo(){
            pincel.beginPath()
            pincel.moveTo(350,140)
            pincel.lineTo(350,210)
            pincel.lineWidth = 3
            pincel.strokeStyle = "white"
            pincel.stroke();
        }
      //braço direito
      function bracoDir(){
            pincel.beginPath()
            pincel.moveTo(350,150)
            pincel.lineTo(300,180)
            pincel.stroke();
      }
      // braço esquerdo
      function bracoEsq(){
            pincel.beginPath()
            pincel.moveTo(350,150)
            pincel.lineTo(400,185)
            pincel.stroke();
        }
      //perna direita
      function pernaDir(){
            pincel.beginPath()
            pincel.moveTo(350,208)
            pincel.lineTo(380,250)
            pincel.stroke();
        }
      
      //perna esquerda
      function pernaEsq(){
            pincel.beginPath()
            pincel.moveTo(350,208)
            pincel.lineTo(322,250)
            pincel.stroke();
        }
      
      base()
      um();
      dois();
      tres();
     


     
      
      
      


      
        

       
