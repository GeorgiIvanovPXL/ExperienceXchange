<template>
  <div class="main_login">
    <div class="main_wrapper">
      <div class="heading">
        <p>Welkom bij</p>
        <h1>XPX</h1>
      </div>
      <div class="login_form">
        <p class="form_title">Meld je aan om verder te gaan.</p>
        <form ref="loginForm" @submit="handleSubmit">
          <div class="form_control">
            <label>Email</label>
            <input type="email" placeholder="Geef je email in" />
          </div>
          <div class="form_control">
            <label>Wachtwoord</label>
            <input type="password" placeholder="Geef je wachtwoord in" />
          </div>
          <button class="btn_login" type="submit">Aanmelden</button>
        </form>
      </div>
      <div class="alt_logins">
        <div class="alt_login_item">
          <p>{{ 'TODO: Google icon' }}</p>
          <p>Aanmelden met google.</p>
        </div>
        <div>
          <p>Ga verder als gast</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter()

const handleSubmit = (event: Event) => {
  event.preventDefault() // Prevent default form submission
  router.push('/main') // Navigate to the Dashboard route
}
</script>

<style scoped>
.main_login {
  width: 100%;

  height: 100dvh;
  padding: 24px;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;
}
.main_wrapper {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-width: 340px;
}
.main_login .heading {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.main_login .heading p {
  color: white;
  margin: 0;
  line-height: normal;
}
.main_login .heading h1 {
  color: white;
  line-height: normal;
  margin: 0;
}
.main_login .login_form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.login_form .form_title {
  color: white;
}
.login_form form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.login_form .form_control {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.login_form .form_control label {
  color: white;
}

.login_form .form_control input {
  background-color: transparent;
  border: 1px solid #9e9e9e;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
}
.login_form .btn_login {
  background-color: white;
  border: 0px solid transparent;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  font-weight: 550;
}
.alt_logins {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.alt_logins .alt_login_item {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

.alt_logins .alt_login_item p {
  text-decoration: underline;
  text-decoration-skip-ink: all;
  text-underline-offset: 2px;
}
</style>
