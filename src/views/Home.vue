<template>
	<div style="padding-left: 10%; padding-right: 5%;">
		<div class="q-pa-md" >
			<div class="q-py-md" >
				<q-btn icon="add" @click="onCreate"/>
			</div>
			<q-btn icon="visibility" @click="toggleColumn('phoneNumber')">Toggle Phone Number Column</q-btn>
        <q-btn icon="visibility" @click="toggleColumn('business')">Toggle Business Column</q-btn>
        <q-btn icon="visibility" @click="toggleColumn('date')">Toggle Date Column</q-btn>
    	<q-table 
		flat bordered
     	title="Treats"
      	:rows="rows"
      	:columns="columns"
     	row-key="id"
		:rows-per-page-options="[10, 25, 50, 100]"
     	:pagination="pagination"
    	>
			<template v-slot:body-cell-actions="props">
				<q-td :props="props">
					<q-btn icon="mode_edit" @click="onEdit(props.row)"/>
					<q-btn icon="delete" @click="onDelete(props.row)"/>
				</q-td>

			</template>
		</q-table>
  	</div>
	</div>
	
</template>
<script setup>
import { ref, onMounted } from 'vue'
import router from '../router'
import jsonData from '../db.json'
const allColumns = [
{
    name: 'name',
    required: true,
    label: 'name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
//   { name: 'id', align: 'left', label: 'id', field: 'id', sortable: true },
//   { name: 'name', label: 'name', field: 'name', sortable: true },
  { name: 'phoneNumber', align: 'left',label: 'phoneNumber', field: 'phoneNumber',sortable: true },
  { name: 'business', align: 'left',label: 'business', field: 'business',sortable: true },
  { name: 'date', align: 'left',label: 'date', field: 'date',sortable: true },
  { name: 'actions', align: 'center',label: 'id', field: 'id',sortable: true },
  
]
const visibleColumns = ref(allColumns)
const rows = ref([])

onMounted(() => {
  // Fetch the JSON data and assign it to the 'rows' ref
  rows.value = jsonData.contact;
})

const onEdit = (row) => {
  // Navigate to the edit page with the ID of the selected row
  router.push(`/edit/${row.name}`)
}

const onDelete = (row) => {
  // Perform delete operation here (e.g., make an API call to delete the record)
  // After successful delete, you can update the 'rows' ref to reflect the changes
  alert(`Deleted: ${row.name}`)
}

const onCreate = () => {
  router.push('/create')
}
const toggleColumn = (columnName) => {
  const columnIndex = visibleColumns.value.findIndex(col => col.name === columnName)
  if (columnIndex !== -1) {
    visibleColumns.value.splice(columnIndex, 1)
  } else {
    const allColumn = allColumns.find(col => col.name === columnName)
    visibleColumns.value.push(allColumn)
  }
}
</script>