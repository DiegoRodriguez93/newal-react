import Swal from 'sweetalert2';
/* import { useDispatch } from 'react-redux';
import { logIn } from './../redux/actions'; */

export default function onLogIn (data, e) {

    return new Promise ((resolve, reject) => { 

      Swal.fire({
        title: 'Iniciando sesión...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
        Swal.showLoading();
        }
    });

    let error;
    try {

        const formData = new FormData()
        formData.append('email', data.email);
        formData.append('password', data.password);

        fetch('https://ajedrezlatino.com/api/login.php', {
        method: 'POST',
        body: formData
        })
        .then(r => r.json())
        .then(res => {
        console.log(res)

        if(res.result){

            /* const dispatch = useDispatch(); */
;
            Swal.fire({
              title: 'Correcto!',
              allowEscapeKey: false,
              allowOutsideClick: false,
              text: res.message,
              icon: 'success'
            });

           /*  dispatch(logIn(res.first_name, res.last_name, res.hash)); */

            e.target.reset();

            resolve({
               "fname" : res.first_name,
               "lname" : res.last_name,
               "token" : res.hash
            });
   
          }else{
  
            Swal.fire('Error!','Ha ocurrido un error inesperado!, pruebe más tarde','error');
          }

        }).catch(err => {

                Swal.fire('Error!','Ha ocurrido un error inesperado!, pruebe más tarde!','error');
            }); 


    } catch (err) {

      Swal.fire('Error!','Ha ocurrido un error inesperado!, pruebe más tarde','error');

    }

})

  };