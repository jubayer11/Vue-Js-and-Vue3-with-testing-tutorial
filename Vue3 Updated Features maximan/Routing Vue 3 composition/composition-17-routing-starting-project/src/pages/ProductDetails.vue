<template>
  <section>
    <h2>{{ selectedProduct.title }}</h2>
    <h3>${{selectedProduct.price}}</h3>
    <p>{{ selectedProduct.description}}</p>

  </section>
</template>

<script>
import { inject, ref } from 'vue';
import {useRoute} from 'vue-router';

export default {
  props:['pid'],
  setup(props) {
    const route=useRoute();
    console.log(route.params.pid);

    const products=inject('products');

    const title = ref('');
    const price = ref(null);
    const description = ref('');

    const selectedProduct=products.value.find(product=>product.id===props.pid);

    return { title, price, description,selectedProduct };
  },
};
</script>


<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>