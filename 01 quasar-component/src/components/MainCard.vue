<script setup lang="ts">
import { ref, computed } from 'vue';

import ListUsers from './ListUsers.vue';

import { getUsersList } from './api';
import { User } from '../types';

//props
const props = defineProps<{
  user: User;
}>();

//variables
const currentUser = ref<User>(props.user);
const visible = ref<boolean>(false);
const search = ref<string>('');

//functions
const hadleChangeUser = () => {
  visible.value = true;
};

const handleCancelChange = () => {
  visible.value = false;
  search.value = '';
};

const filterList = computed(() => {
  if (search.value.length > 3) {
    return getUsersList(search.value);
  }
  return [];
});

const onChangeUser = (user: User) => {
  currentUser.value = user;
  handleCancelChange();
  emits('changeUser', user);
};

//emits
const emits = defineEmits<{
  (e: 'changeUser', user: User): void;
}>();

//exposes
defineExpose({
  hadleChangeUser,
});
</script>

<template>
  <div class="my-card">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-card-section>
          <q-avatar size="60px">
            <img
              :src="`https://cdn.quasar.dev/img/avatar${currentUser.id}.jpg`"
            />
          </q-avatar>
        </q-card-section>
        <q-card-section class="q-pa-sm card-detail">
          <div class="row justify-between">
            <div class="text-grey-6">{{ $t('ua_title_1') }}</div>
            <div>
              <q-badge
                v-if="currentUser.principal"
                color="primary"
                text-color="white"
                outline
                :label="$t('ua_badge_1')"
                class="q-pa-xs"
              />
            </div>
          </div>
          <div class="text-name q-mt-xs q-mb-xs">{{ currentUser.name }}</div>
          <div class="text-caption text-grey">
            {{ $t('ua_label_1') }}: {{ currentUser.division.code }}
            {{ currentUser.division.name }}
          </div>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat> {{ $t('ua_btn_1') }}</q-btn>
        <q-btn flat @click="hadleChangeUser" v-if="!visible">
          {{ $t('ua_btn_2') }}
        </q-btn>
        <q-btn flat @click="handleCancelChange" v-else>
          {{ $t('ua_btn_3') }}
        </q-btn>
        <q-space />
        <!-- <q-btn flat> Revertir </q-btn> -->
      </q-card-actions>

      <q-card-section v-if="visible" class="q-py-sm q-px-sm">
        <q-input
          v-model="search"
          type="text"
          outlined
          flat
          dense
          :placeholder="$t('ua_label_2')"
        />
      </q-card-section>
    </q-card>
    <ListUsers
      :users="filterList"
      v-if="search.length > 3"
      @selected-user="onChangeUser"
    />
  </div>
</template>

<style scoped>
.my-card {
  width: 350px;
}
.card-detail {
  width: 100%;
}
.text-name {
  font-size: 1.2em;
}
</style>
