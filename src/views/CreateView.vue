<template>
  <div>
    <div class="q-gutter-md q-p-x-xl" style="padding: 10%; max-width: 1024px">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input v-model="fname" label="First Name" />
        <q-input v-model="lname" label="Last Name" />
        <q-input v-model="username" label="Username" />
        <q-input v-model="password" label="Password" />
        <q-input v-model="email" label="E-Mail" />
        <q-input v-model="avatar" label="Avatar" />
        <q-btn label="Submit" type="submit" color="primary" />
      </q-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const fname = ref('Cat');
const lname = ref('Chat');
const username = ref('cat.chat@gmail.com');
const password = ref('1234');
const email = ref('cat.chat@gmail.com');
const avatar = ref('https://www.melivecode.com/users/5.png');

const onSubmit = async () => {
  const requestOptions = {
    method: 'POST', // Use POST for creating data
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
      'https://www.melivecode.com/api/users/create',
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
