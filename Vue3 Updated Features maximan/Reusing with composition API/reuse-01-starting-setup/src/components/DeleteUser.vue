<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import userAlert from '@/hooks/alert';
import { ref } from 'vue';
export default {
  components: {
    UserAlert,
  },
  setup()
  {
    const alertTitle= ref('Delete User?');
    const {alertIsVisible,hideAlert,showAlert}=userAlert();
    return{showAlert,hideAlert,alertIsVisible,alertTitle};
  },
  // data() {
  //   return {
  //     alertIsVisible: false,
  //   };
  // },
  // methods: {
  //   showAlert() {
  //     this.alertIsVisible = true;
  //   },
  //   hideAlert() {
  //     this.alertIsVisible = false;
  //   },
  // },
};
</script>