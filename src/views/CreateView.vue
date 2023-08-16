<template>
  <div>
    <div class="q-gutter-md q-p-x-xl" style="padding: 10%; max-width: 1024px">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input v-model="id" label="ID" readonly />
        <q-input v-model="fname" label="First Name" />
        <q-input v-model="lname" label="Last Name" />
        <q-input v-model="username" label="Username" />
        <q-input v-model="password" label="Password" />
        <q-input v-model="email" label="E-Mail" />
        <q-input v-model="avatar" label="Avatar" />
        <q-btn label="Update" type="update" color="primary" />
      </q-form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const fname = ref('Cat')
const lname = ref('Chat')
const username = ref('cat.chat@gmail.com')
const password = ref('1234')
const email = ref('cat.chat@gmail.com')
const avatar = ref('https://www.melivecode.com/users/5.png')

const fetchData = async () => {
  try {
    const response = await fetch(`https://www.melivecode.com/api/users/${id.value}`);
    const result = await response.json();
    fname.value = result.user.fname;
    lname.value = result.user.lname;
    username.value = result.user.username;
    password.value = result.user.password;
    email.value = result.user.email;
    avatar.value = result.user.avatar;
  } catch (error) {
    console.error('Error:', error);
  }
};

onMounted(() => {
  fetchData();
});

const onSubmit = async () => {
  const requestOptions = {
    method: 'PUT', // Use PUT for updating
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fname: fname.value,
      lname: lname.value,
      username: username.value,
      password: password.value,
      email: email.value,
      avatar: avatar.value,
    }),
  };

  try {
    const response = await fetch(
      `https://www.melivecode.com/api/users/${id.value}`,
      requestOptions
    );
    const result = await response.json();
    alert(result.message);
    if (result.status === 'ok') {
      // Redirect back to the user list or wherever you want
      router.push('/');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
</script>
