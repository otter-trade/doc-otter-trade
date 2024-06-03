<script setup lang="ts">
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
  console.log(`%c${Text}`, 'color: #eddfcd');
  return Text;
};
</script>

<template>
  <div class="mo7-home-page">这里是首页内容</div>
</template>

<style lang="scss">
.mo7-home-page {
  background-color: red;
}
</style>
