


<script>

import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { fly } from 'svelte/transition';


let name;
let uname;
let pass;
let email;
let einvalid;
let pinvalid;
let uninvalid;
let ninvalid;


function Register(e){
  console.log(pass.value);
  if(name.value=="" ){
    ninvalid=true;
    return
  }
  if(uname.value=="" ){
    uninvalid=true;
    return
  }
  if(pass.value=="" ){
    pinvalid=true;
    return
  }


createUserWithEmailAndPassword(auth, email.value, pass.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

updateProfile(auth.currentUser, {
  name: name.value, uname: uname.value
}).then(() => {
  // Profile updated!
  // ...
toggleSignin();
  
}).catch((error) => {
  // An error occurred
  const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
  // ...
});
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    if(errorCode == "auth/invalid-email"){
    einvalid = true;
    pinvalid = false;
  }
else if(errorCode == "auth/weak-password"){
    einvalid = false;
    pinvalid = true;
  }
else if(errorCode== "auth/network-request-failed"){
    alert("Check your network connection!!!")
  }
else{ 
einvalid=false;
pinvalid=false;
uninvalid=false;
ninvalid=false;
  console.log(errorCode);
}
    const errorMessage = error.message;
 
    
    // ..
  });




}


function clearall(){
einvalid="";
pinvalid="";
uninvalid="";
ninvalid="";
}


  let signInModel=false;

  function toggleSignin(e) {
    // signInModel.classList.toggle('is-active');
    signInModel=!signInModel;
    clearall();
  }





</script>

<button on:click={toggleSignin} class="button is-light">
  <strong>Sign up</strong>
</button>


{#if signInModel===true}

<div class="modal is-active">
  <!-- bind:this={signInModel} > -->
  <div class="modal-background" on:click={toggleSignin} ></div>
  <div class="modal-card" transition:fly="{{ y: 200, duration: 250 }}">
    <header class="modal-card-head" >
      <p class="modal-card-title">Sign up</p>
      <button  on:click={toggleSignin} class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label" > Name</label>
        <div class="control">
          <input class={`input ${ninvalid ? "is-danger" : ''}`} type="text" placeholder="Text input" bind:this={name}>
        </div>
        <p class={`help ${ninvalid ? "is-danger" : ''}`}>Name cannot be empty</p>
      </div>
      
      <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input class={`input ${uninvalid ? "is-danger" : ''}`} type="text" placeholder="Text input" value="" bind:this={uname}>
          <span class="icon is-small is-left">
            <i class="gg-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
        <p class={`help ${uninvalid ? "is-danger" : ''}`}>Username cannot be empty</p>
      </div>
      


      <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class={`input ${einvalid ? "is-danger" : ''}`} type="email" placeholder="Email input" value="" bind:this={email}>
          <span class="icon is-small is-left">
            <i class="gg-mail"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
         <p class={`help ${einvalid ? "is-danger" : ''}`}>This email is invalid</p>
      </div>
      
    

      
      <div class="field">
        <label class="label">Password</label>
        <div class="control has-icons-left">
          <input class={`input ${pinvalid ? "is-danger" : ''}`} type="password" placeholder="Password" bind:this={pass} >
          <span class="icon is-small is-left">
            <i class="gg-eye"></i>
          </span>          
        </div>    
        <p class={`help ${pinvalid ? "is-danger" : ''}`}>password is weak</p>
      </div>

        
      

    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" on:click={Register}>Register</button>
      <button class="button" on:click={toggleSignin}>Cancel</button>
    </footer>
  </div>
</div>

{/if}