<script>
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { fly } from 'svelte/transition';

  let logInModal=false;

  let email;
  let pass;
  let user;

  let variable = "";
  let variable2 = "";
  let variable3="";


  function Login(e) {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email.value, pass.value)
      .then((userCredential) => {
        // Signed in
        user = userCredential.user;
        // ...
        toggleLogin();
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        if (errorCode == "auth/invalid-email") {
          variable = "This email is invalid";
          variable2 = "";
          variable3 = "";
        } else if (errorCode == "auth/wrong-password") {
          variable = "";
          variable2 = "wrong password";
          variable3 = "";
        } else if (errorCode == "auth/user-not-found") {
          variable = "Account not exist";
          variable3 = "";
          variable2 = "";
        } else if (errorCode == "auth/too-many-requests") {
          variable = "";
          variable3 = "too-many-requests";
          variable2 = "";
        } else {
          variable = "";
          variable2 = "";
          console.log(errorCode);
        }
      });
  }


  function clearall(){
variable=""
variable2=""
variable3=""
}

  function toggleLogin(e) {
    // logInModal.classList.toggle("is-active");
    logInModal=!logInModal;
    clearall();
  }
</script>

<button on:click={toggleLogin} class="button is-secondary is-primary is-dark">
  <strong>Log in</strong>
</button>

{#if logInModal===true}

<div class="modal is-active">
<!-- bind:this={logInModal} -->
  <div class="modal-background" on:click={toggleLogin} />
  <div class="modal-card" transition:fly="{{ y: 200, duration: 250 }}">
    <!-- in:fly="{{ y: -50, duration: 250, delay: 300 }}" out:fly="{{ y: -50, duration: 250 }}" -->
    <header class="modal-card-head">
      <p class="modal-card-title">Log in</p>
      <button on:click={toggleLogin} class="delete" aria-label="close" />
    </header>
    <section class="modal-card-body">
      <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class={`input ${variable ? "is-danger" : ''}`}
            type="email"
            placeholder="Email input"
            value=""
            bind:this={email}
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope" />
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle" />
          </span>
        </div>
        <p class="help is-danger">{variable}</p>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <p class="control has-icons-left">
          <input
            class={`input ${variable2 ? "is-danger" : ''}`}
            type="password"
            placeholder="Password"
            bind:this={pass}
          />
          <span class="icon is-small is-left">
            <i class="fas fa-lock" />
          </span>
        </p>
        <p class="help is-danger">{variable2}</p>
      </div>
    </section>

    <footer class="modal-card-foot">
      <button class="button is-info" on:click={Login}>Log in</button>
      <button class="button" on:click={toggleLogin}>Cancel</button>
    </footer>
  </div>
</div>

{/if}