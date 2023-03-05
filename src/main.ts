import { createApp } from 'vue';
import App from '@/app.vue';
import router from './plugins/router';
import '@/style.css';

router.afterEach(function () {
  document.getElementById('app-content')?.focus();
});

createApp(App).use(router).mount('#app');
