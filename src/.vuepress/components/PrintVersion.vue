<script setup lang="ts">
import { onMounted } from 'vue';

import AppPackage from '../../../package.json';

const textConsole = `   
███╗   ███╗ ██████╗ ███████╗
████╗ ████║██╔═══██╗╚════██║
██╔████╔██║██║   ██║    ██╔╝
██║╚██╔╝██║██║   ██║   ██╔╝ 
██║ ╚═╝ ██║╚██████╔╝   ██║  
╚═╝     ╚═╝ ╚═════╝    ╚═╝`;

const PrintlnInfo = () => {
  const PackageData: any = AppPackage;
  const Text = `${textConsole}${PackageData.version}`;
  console.info(Text);
  return Text;
};
</script>

<template>
  <ClientOnly>
    <div class="none">{{ PrintlnInfo() }}</div>
  </ClientOnly>
</template>

<style lang="scss"></style>
