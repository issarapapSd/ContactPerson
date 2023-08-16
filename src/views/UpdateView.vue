<template>
    <div >
        <div class="q-gutter-md q-p-x-xl" style="padding: 10%;max-width: 1024px">
          <q-form
          @submit="onSubmit"
          class="q-gutter-md"
          >
            <q-input v-model='id' label="ID" readonly/>
            <!-- <q-input v-model='lname' label="Last Name" />
            <q-input v-model='username' label="Username" />
            <q-input v-model='password' label="Password" />
            <q-input v-model='email' label="E-Mail" />
            <q-input v-model='avatar' label="Avatar" /> -->
            <q-btn label="Update" type="update" color ="primary"/>
          </q-form>
           
        </div>
    </div>>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route  = userRoute()
const id = ref(route.params.id)
const fname = ref('')
const lname = ref('')
const username = ref('')
const password = ref('')
const email = ref('')
const avatar = ref('')


const fetchData = async () => {
  fetch("https://www.melivecode.com/api/users/"+id.value)
  .then(res => res.json())
  .then((result) => {
    fname.value = result.user.fname
    lname.value = result.user.lname
    username.value = result.user.username
    password.value = result.user.password
    email.value = result.user.email
    avatar.value = result.user.avatar
  })
}
onMounted(() => {
  fetchData();
});
// https://www.melivecode.com/api/users/1
const onSubmit = () => {

}
</script>