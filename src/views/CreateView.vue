<template>
    <div >
        <div class="q-gutter-md q-p-x-xl" style="padding: 10%;max-width: 1024px">
          <q-form
          @submit="onSubmit"
          class="q-gutter-md"
          >
            <q-input v-model='fname' label="First Name" />
            <q-input v-model='lname' label="Last Name" />
            <q-input v-model='username' label="Username" />
            <q-input v-model='password' label="Password" />
            <q-input v-model='email' label="E-Mail" />
            <q-input v-model='avatar' label="Avatar" />
            <q-btn label="Sunmit" type="submit" color ="primary"/>
          </q-form>
           
        </div>
    </div>>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import router from '../router'
import jsonData from '../db.json'
const fname = ref('Cat')
const lname = ref('Chat')
const username = ref('cat.chat@gmail.com')
const password = ref('1234')
const email = ref('cat.chat@gmail.com')
const avatar = ref('https://www.melivecode.com/users/5.png')

const onSubmit = () => {
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "fname": fname.value,
  "lname": lname.value,
  "username": username.value,
  "password": password.value,
  "email": email.value,
  "avatar": avatar.value,
});

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://www.melivecode.com/api/users/create", requestOptions)
  .then(response => response.text())
  .then(result => {
    alert(result.message)
    if(result.status === 'ok'){
      router.push('/')
    }
  })
  .catch(error => console.log('error', error));
}
onMounted(() => {
  fetchData();
});
</script>