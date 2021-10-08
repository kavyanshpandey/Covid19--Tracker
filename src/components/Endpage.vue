<template>
    <div class="as">
        <img :src="image"/>
    </div>
</template>
    
<script>
 import image from "/logo.jpg"
    export default {
        data: function () {
            return {
                image: image
            }
        }
    }
</script>
    
<style lang="css">
.as{
    max-width: 100%;
    height: auto;
    object-fit: fit;
    background:#ec3312
}

img {
  max-width: 100%;
  height: auto;
}
</style>