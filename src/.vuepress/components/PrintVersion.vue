<script setup lang="ts">
import AppPackage from '../../../package.json';

const textConsole = `OtterTrade.com   `;

const PrintlnInfo = () => {
  const PackageData: any = AppPackage;
  const Text = `${textConsole}${PackageData.version}`;
  console.log(`%c${Text}   `, `color:#ffcd05;font-size:1rem;font-style: italic;`);
  return Text;
};
</script>

<template>
  <ClientOnly>
    <div class="none">版本打印{{ PrintlnInfo() }}</div>
  </ClientOnly>
</template>

<style lang="scss"></style>
