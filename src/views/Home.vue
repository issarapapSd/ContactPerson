<template>
  <div style="padding-left: 10%; padding-right: 5%;">
    <div class="q-pa-md">
      <div class="q-py-md">
        <q-btn icon="add" @click="onCreate" />
      </div>
      <q-table
        flat
        bordered
        title="Treats"
        :rows="rows"
        :columns="visibleColumns"
        row-key="id"
        :rows-per-page-options="[10, 25, 50, 100]"
        :pagination="pagination"
      >
        <template v-slot:body-cell-avatar="props">
          <q-td :props="props">
            <q-img :src="props.row.avatar" />
          </q-td>
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn icon="mode_edit" @click="onEdit(props.row)" />
            <q-btn icon="delete" @click="onDelete(props.row)" />
          </q-td>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const router = useRouter();
const allColumns = ref([
  { name: 'id', align: 'left', label: 'ID', field: 'id', sortable: true },
  { name: 'fname', align: 'left', label: 'First Name', field: 'fname', sortable: true },
  { name: 'lname', align: 'left', label: 'Last Name', field: 'lname', sortable: true },
  { name: 'username', align: 'left', label: 'Username', field: 'username', sortable: true },
  { name: 'avatar', align: 'center', label: 'Avatar', field: 'avatar' },
  { name: 'actions', align: 'center', label: 'Actions', sortable: false },
]);
const visibleColumns = ref(allColumns);
const rows = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get('https://www.melivecode.com/api/users');
    rows.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchData();
});

const onEdit = (row) => {
  // Navigate to the edit page with the ID of the selected row
  router.push(`/update/${row.id}`);
};

const onDelete = (row) => {s
  const requestOptions = {
    method: 'DELETE', // Use DELETE for deleting
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    fetch(`https://www.melivecode.com/api/users/delete/${row.id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(`Deleted: ${row.fname} ${row.lname}`);
        fetchData(); // Fetch data again after deleting
      })
      .catch((error) => console.log('Error:', error));
  } catch (error) {
    console.error('Error:', error);
  }
};

const onCreate = () => {
  router.push('/create');
};

const toggleColumn = (columnName) => {
  const columnIndex = visibleColumns.value.findIndex((col) => col.name === columnName);
  if (columnIndex !== -1) {
    visibleColumns.value.splice(columnIndex, 1);
  } else {
    const allColumn = allColumns.find((col) => col.name === columnName);
    visibleColumns.value.push(allColumn);
  }
};
</script>
