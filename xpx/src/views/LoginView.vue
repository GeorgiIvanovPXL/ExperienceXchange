<template>
  <div class="main_login">
    <div class="absolute_art_l">
      <BgArtOnboarding />
    </div>
    <div class="main_wrapper">
      <div class="heading">
        <h1>XPX</h1>
      </div>
      <div class="login_form">
        <p class="form_title">Meld je aan om verder te gaan.</p>
        <form ref="loginForm" @submit="handleSubmit">
          <div class="form_control">
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="Geef je email in" />
          </div>
          <div class="form_control">
            <label for="passw">Wachtwoord</label>
            <input id="passw" type="password" placeholder="Geef je wachtwoord in" />
          </div>
          <button class="btn_login" type="submit">Aanmelden</button>
        </form>
      </div>
      <div class="alt_logins">
        <div class="alt_login_item">
          <IconGoogle size="24" />
          <p>Aanmelden met google.</p>
        </div>
        <div class="alt_login_item">
          <p>Ga verder als gast</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import BgArtOnboarding from '../components/BgArtOnboarding.vue'
import IconGoogle from '../components/icons/IconGoogle.vue'

const router = useRouter()

const handleSubmit = (event: Event) => {
  event.preventDefault() // Prevent default form submission
  router.push('/main/navigator') // Navigate to the Dashboard route
}
</script>

<style scoped>
.main_login {
  width: 100%;
  min-height: 100dvh;
  min-height: 100%;
  min-height: 100vh;
  position: relative;
  z-index: 10;
  height: 100dvh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: flex-start;
}

.absolute_art_l {
  position: absolute;
  top: 16px;
  z-index: -1;
  right: 16px;
}
.main_wrapper {
  display: flex;
  padding-top: 72px;

  flex-direction: column;
  gap: 40px;
  min-width: 340px;
}

.main_login .heading {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.main_login .heading p {
  color: white;
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
}
.main_login .heading h1 {
  color: white;
  font-size: 96px;
  font-weight: 600;
  line-height: 106px;
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
  outline: 0px;
  border: 1px solid #9e9e9e;
  color: white;
  padding: 10px 16px;
  border-radius: 4px;
  font-size: 16px;
}

.login_form .form_control input:focus {
  outline: 1.5px solid #cccccc;
}

.login_form .btn_login {
  background-color: white;
  border: 0px solid transparent;
  border-radius: 4px;
  padding: 10px;
  font-size: 20px;
  font-weight: 550;
}
.login_form .btn_login:hover {
  cursor: pointer;
}
.alt_logins {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.alt_logins .alt_login_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.alt_logins .alt_login_item p {
  text-decoration: underline;
  font-size: 18px;
  text-decoration-skip-ink: all;
  text-underline-offset: 2px;
}
</style>
