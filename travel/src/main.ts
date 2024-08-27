import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import './assets/css/common.css'
import './assets/fonts/RobotoSlab/stylesheet.css'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.css'
import 'primeflex/primeflex.css'
import Button from "primevue/button";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

const  app = createApp(App)
app.use(PrimeVue)
app.component('Button',Button)
app.component('Accordion',Accordion)
app.component('AccordionTab',AccordionTab)
app.mount('#app')


