<template lang="pug">
.non-supported
  .wrapper
    img.logo(src='@/static/logo.svg')
    h4 Estamos trabajando en la versión movil de este sitio, de momento puedes visitar la web en tu escritorio sin ningún tipo de problemas

</template>

<style lang="stylus" scoped>
.non-supported
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height 100vh;
  background: white;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

.wrapper
  max-width: 30em;
  padding: 4em;

.logo
  max-width: 15em;

.hidden
  display: none;

</style>
