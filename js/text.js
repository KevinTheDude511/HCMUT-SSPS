const re=/^[a-z]+\.[a-z]+[0-9]*/
var form = document.getElementById('student-form');
var x = document.getElementById('login-message');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        var username=document.getElementById('username').value;
        var password=document.getElementById('password').value;
        if(re.exec(username)){
            x.innerHTML="";
            <meta http-equiv="refresh" content="3; URL=https://account.hcmut.edu.vn/" />
        } else{
            x.style="background-color: rgb(255, 238, 221);color:red";
            x.innerHTML="Invalid HCMUT account";
            x.class="errors";
        }
        console.log(username);
        console.log(password);
    })