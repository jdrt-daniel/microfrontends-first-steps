<script setup lang="ts">
defineEmits<{
  (event: 'cancel'): void;
  (event: 'confirm'): void;
}>();
</script>
<template>
  <q-dialog persistent>
    <q-card class="my-card-alert">
      <q-card-section class="text-grey-6 q-pb-none">
        Reasignar usuario
      </q-card-section>
      <q-card-section class="text-center">
        <q-icon name="person" size="40px" color="primary" />
        <q-icon name="refresh" size="20px" color="primary" />
        <p class="q-mt-sm text-body2 q-mb-none">
          ¿Estas seguro de realizar la acción?
        </p>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn flat dense label="Cancelar" @click="$emit('cancel')" />
        <q-btn
          flat
          dense
          label="Confirmar"
          color="primary"
          @click="$emit('confirm')"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.my-card-alert {
  min-width: 300px;
}
</style>
