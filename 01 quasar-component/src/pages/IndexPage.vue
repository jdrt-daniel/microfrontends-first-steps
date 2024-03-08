<template>
  <q-toolbar class="bg-primary text-white">
    <q-btn flat round dense icon="assignment_ind" />
    <q-toolbar-title> Prueba componente </q-toolbar-title>
    <q-select
      v-model="locale"
      :options="localeOptions"
      label="Quasar Language"
      dense
      borderless
      emit-value
      map-options
      options-dense
      style="min-width: 100px"
    />
  </q-toolbar>
  <div class="q-pa-md">
    <MainCard
      :user="userDefault"
      ref="mainCardRef"
      @change-user="onChangedAction"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import MainCard from '../components/MainCard.vue';
import { User } from 'src/types';

const { locale } = useI18n({ useScope: 'global' });

const localeOptions = ref([
  { value: 'en-US', label: 'English' },
  { value: 'es-ES', label: 'Español' },
]);

const userDefault = {
  id: '1',
  name: 'Erik Machaca',
  photo: '',
  principal: false,
  division: {
    code: '04',
    name: 'Soluciones Medicas',
  },
  am: {
    code: '',
    name: 'Todas',
  },
};

const onChangedAction = (user: User) => {
  console.log('actualizacion ', user);
};

const mainCardRef = ref<InstanceType<typeof MainCard> | null>(null);
</script>

<style scoped></style>
