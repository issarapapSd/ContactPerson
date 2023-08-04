<template>
    <div class="q-pa-md">
        <div class="q-gutter-md" style="max-width: 1024px">
            <q-input v-model='name' label="Full Name" />
            <q-input v-model='phoneNumber' label="Full Phone Number" />
            <q-input v-model='business' label="Full Company" />
            <q-input v-model='date' label="Full Date" />
            <q-btn label="Sunmit" type="submit" color ="primary"/>
        </div>
    </div>>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import router from '../router'
import jsonData from '../db.json'
const columns = [
  // ... ส่วนคอลัมน์ที่เดิม ...
  { name: 'actions', align: 'center', label: 'Actions', field: 'id', sortable: true },
]
const onSubmit = () => {
    const newContact = {
    name: name.value,
    phoneNumber: phoneNumber.value,
    business: business.value,
    date: date.value,
  }

  const rows = ref([])

onMounted(() => {
  // Fetch the JSON data and assign it to the 'rows' ref
  rows.value = jsonData.contact;
})

// เพิ่มฟังก์ชันสำหรับการเพิ่มข้อมูลใหม่ลงใน rows
const onAddNewData = (data) => {
  rows.value.push(data);
}

const onEdit = (name) => {
  alert(name,"edit")
}

const onDelete = (name) => {
  alert(name,"delete")
}

const onCreate = (name) => {
  router.push('/create')
}
}
</script>