<template>
  <q-card class="my-card">
    <q-card-section horizontal>
      <q-card-section>
        <q-avatar
          size="60px"
          font-size="40px"
          color="teal"
          text-color="white"
          icon="person"
        />
      </q-card-section>
      <q-card-section class="q-pt-xs">
        <div class="row justify-between">
          <div class="text-grey-6">Usuario asignado</div>
          <div>
            <q-badge
              color="primary"
              text-color="white"
              outline
              label="Principal"
              class="q-pa-xs"
            />
          </div>
        </div>
        <div class="text-h7 q-mt-sm q-mb-xs">Nombre del usuario</div>
        <div class="text-caption text-grey">
          Division: Sistemas | AMercado: Sistemas 99
        </div>
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-btn flat> Asignarme</q-btn>
      <q-btn flat> Cambiar </q-btn>
      <q-space />
      <!-- <q-btn flat> Revertir </q-btn> -->
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
</script>

<style scoped>
.my-card {
  max-width: 400px;
}
</style>