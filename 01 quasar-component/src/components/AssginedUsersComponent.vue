<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal>
      <q-card-section>
        <q-avatar
          size="70px"
          font-size="52px"
          color="teal"
          text-color="white"
          icon="person"
        />
      </q-card-section>
      <q-card-section class="q-pt-xs">
        <div class="text-overline row justify-between w-full">
          <div>Usuario asignado</div>
          <div>
            <q-badge
              color="primary"
              text-color="white"
              label="Principal"
              class="q-pa-xs"
            />
          </div>
        </div>
        <div class="text-h5 q-mt-sm q-mb-xs">Nombre del usuario</div>
        <div class="text-caption text-grey">
          Division: Sistemas | AMercado: Sistemas 99
        </div>
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-btn flat> Asignarme</q-btn>
      <q-btn flat color="primary"> Revertir </q-btn>
      <q-space />
      <q-btn flat color="primary" label="algun evento" />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>