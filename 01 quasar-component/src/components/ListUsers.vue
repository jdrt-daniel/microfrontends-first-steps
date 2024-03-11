<script setup lang="ts">
import { User } from '../types';

defineProps<{
  users: User[];
}>();

defineEmits<{
  (event: 'selectedUser', user: User): User;
}>();
</script>

<template>
  <div class="relative w-full">
    <div class="my-list shadow-2">
      <q-intersection
        v-for="user in users"
        :key="user.id"
        transition="flip-right"
        class="example-item"
      >
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img :src="`https://cdn.quasar.dev/img/avatar${user.id}.jpg`" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ user.name }}</q-item-label>
            <q-item-label caption>{{ user.division.name }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn
              color="primary"
              icon="check"
              flat
              dense
              rounded
              @click="$emit('selectedUser', user)"
            />
          </q-item-section>
        </q-item>
      </q-intersection>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.example-item {
  height: 56px;
}
.my-list {
  position: absolute;
  z-index: 10000;
  width: 350px;
}
</style>
