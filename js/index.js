

const URL = "https://rickandmortyapi.com/api/";

const xhr = new XMLHttpRequest(); //xhr


function ManejadorPeticionAlv() { //inicia funcion


    if (this.readyState == 4 && this.status == 200) {


        //0 = UNSET, No se ha llamado al metodo open

        // 1 = OPENED, se ha llamado al metodo open.
        // 2 = headers_recived---> se esta llamando al metodo send()
        // 3 = loading, cargando---está recibiendo la respuesta
        //4 = 200, todo chido


       // console.log(this.response); //respuesta del servidor


        //guardando los datos recibidos  y tratando la info para que se vuelvan json alv xd 



            const data = JSON.parse(this.response);

            console.log(data);

            //asignando un id para poder pintar la api 

            const HTMLRespuesta = document.querySelector("#app");

            //pintando los datos en html que queremos ver 

            const tp1 = [data].map(item => `<li>${item.name} ${item.status} </li>`);

            console.log(tp1);


            //mandando la info al html

            HTMLRespuesta.innerHTML = `<ul>${tp1} </ul>`;


    }


}//finaliza funcion


xhr.addEventListener('load', ManejadorPeticionAlv );

//llamando al metodo open usando get para que nos devuerlva datos del servidor

xhr.open('GET', `${URL}/character/`);  //activa el estado uno


//inicianndo la petición

xhr.send();



