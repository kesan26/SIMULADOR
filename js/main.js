function inversion(){
    // Capturamos los valores de los campos del formulario
    let  cNombres=document.getElementById("nombres").value;
    let cTelefono=document.getElementById("telefono").value;
    let cCorreo=document.getElementById("email").value;
    let cMonto= document.getElementById("inversion").value;
    let cTiempo= document.getElementById("tiempo").value; 
    // Capturamos los contenedores pr simulaor y post simulador
    let contPre = document.querySelector(".pre-simulation");
    let contPost= document.querySelector(".post-simulation");
    // Mostaramos y capturamos el panel de la derecha
    let pNombres= document.getElementById("nombres-show");
    let pEmail= document.getElementById ("email-show");
    let pTiempo= document.getElementById("tiempo-show");
    let pMonto=document.getElementById("interes-show");
    let pTotal=document.getElementById("total-show");
    let pGanancia=document.getElementById("ganancia-show");
    // Mostramos  y ocultamos el panel de la derecha 
    contPost.classList.remove("disabled")
    contPre.classList.add("disabled");
    // Mostrar datos del Usuario
    pNombres.innerHTML=cNombres;
    pEmail.innerHTML=cCorreo;


    //Definir variables para calcular ganacia y el total 
    let interes1= ((cMonto*0.8)/100*12);
    let interes2= ((cMonto*1.3)/100*24);
    let interes3= ((cMonto*1.7)/100*36);
    let total1= parseInt (cMonto)+ parseInt(interes1);
    let ganacia1=total1-cMonto;
    let total2= parseInt (cMonto)+ parseInt(interes2);
    let ganacia2=total2-cMonto;
    let total3= parseInt (cMonto)+ parseInt(interes3);
    let ganacia3=total3-cMonto;
    // Utilizamos  un switch para cambiar el tiempo y el interes segun los años seleccionados por el usuario 

    switch (cTiempo) {
        case "1":
            pTiempo.innerHTML= "12 meses"
            pMonto.innerHTML="0.8%"     
            pTotal.innerHTML=total1;
            pGanancia.innerHTML=ganacia1;


            break;

            case "2":
                pTiempo.innerHTML= "24 meses"
                pMonto.innerHTML="1.3%" 
                pTotal.innerHTML=total2;
                pGanancia.innerHTML=ganacia2;
                break;

                case "3":
                    pTiempo.innerHTML= "36 meses"
                    pMonto.innerHTML="1.7%"  
                    pTotal.innerHTML=total3;
                    pGanancia.innerHTML=ganacia3;


        default:
            break;
    }
}