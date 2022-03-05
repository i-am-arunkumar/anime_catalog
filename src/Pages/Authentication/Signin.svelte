


<script>

import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";



let name;
let uname;
let pass;
let email;
let einvalid;
let pinvalid;

function Register(e){
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
else{
  console.log(errorCode);
}
    const errorMessage = error.message;
 
    
    // ..
  });




}





  let signInModel;

  function toggleSignin(e) {
    signInModel.classList.toggle('is-active');
  }





</script>

<button on:click={toggleSignin} class="button is-light">
  <strong>Sign up</strong>
</button>


<div class="modal" bind:this={signInModel} >
  <div class="modal-background" on:click={toggleSignin} ></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Sign up</p>
      <button  on:click={toggleSignin} class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label" > Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" bind:this={name}>
        </div>
      </div>
      
      <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="text" placeholder="Text input" value="" bind:this={uname}>
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
        <!-- <p class="help is-success">This username is available</p> -->
      </div>
      


      <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class={`input ${einvalid ? "is-danger" : ''}`} type="email" placeholder="Email input" value="" bind:this={email}>
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
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
            <i class="fas fa-lock"></i>
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

