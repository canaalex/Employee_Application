const btn = document.getElementById('btn');

    let email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    form_email = document.getElementById("email").value;

    btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = 'gray';
    if(email.test(form_email)!= true){
            console.log('invalid email')
        }
        let d={}
        let f = document.getElementById('form')
        for(let i=0 ; i< f.length ; i++){
            d[f.elements[i].name]=f.elements[i].value
            
        }
        console.log(d)    
    });
    
    
  

 
 function debounce(func, timeout = 2000){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
function saveInput(){
  console.log('Delay by 2 sec');
}
const processChange = debounce(() => saveInput());
