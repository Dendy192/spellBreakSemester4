
function cekForm(){
    var name = document.getElementById('fName').value;
    var e = document.getElementById('email').value;
    var uName = document.getElementById('uName').value;
    var psw = document.getElementById('pass').value;
    var cpsw = document.getElementById('cPass').value;
    var gen = document.getElementById('male').checked;
    var gen1 = document.getElementById('female').checked;
    var quan = document.getElementById('qty').value;
    var stret = document.getElementById('addrs').value;
    var cek = document.getElementById('checkbox').checked;
    
    

    
    var at =  e.indexOf('@');
    var dot = e.lastIndexOf('.');
    
    if(name == ''){
        alert("Fullname Must be filled");
        return false;
    }
    
    else if(letter(name)==false){
        alert("Must consist of letters only");
        return false;
    }
    else if(e == ''){
        alert("Email Must be filled");
        return false;
    }
    
    else if(at <1 || dot<at+2 || dot+2>=e.length){
        alert("email must be contain @ and .");
        return false;
    }
    else if(uName <7){
        alert("Length must be greater than 6 characters");
        return false;
    }
    else if(uName.indexOf(' ') !== -1){
         alert("Cannot contain space character ");
         return false;
    }
    else if(psw.length <9){
        alert("Password must more than 8 Character");
        return false;
    }
     else if(alphanum(psw)==true){ 
        alert("Must be alphanumeric ");
        return false;
    }
     else if(cpsw != psw){
        alert("Confirm password not same");
        return false;
     }
    
    else if(gen == false && gen1 == false){
        alert("Gender must choose");
        return false;
    }

    else if(quan <1){
        alert("Must be greater than 0");
        return false;
    }

    else if(!stret.endsWith("Street")){
        alert("Must ends with ‘ Street’ ");
        return false;
    }

    else if(cek == false){
        alert("Must be checked");
        return false;
        
    }

    else{
        alert("Thangkyou for buying");
        name.value="";
        e.value="";
        uName="";
        psw.value="";
        cpsw.value="";
        gen.checked == false;
        gen1.checked == false;
        quan.value="";
        stret.value="";
        cek.checked == false;

        
    }
}   
function letter(name) {
      for (var i= 0; i < name.length; i++) {
       
        if (name.charAt(i) >= 48 || name.charAt(i) <= 57) { 
          return false;
        }
      }
      return true;
    };
    
function alphanum(psw){
    for (var i= 0; i < psw.length; i++) {
        if (psw.charAt(i) >= 47 || psw.charAt(i) <= 56 &&
            psw.charAt(i) >= 64 || psw.charAt(i) <= 91 &&
            psw.charAt(i) >= 96 || psw.charAt(i) <= 123) { 
            return false;
          }
        }
        return true;
};