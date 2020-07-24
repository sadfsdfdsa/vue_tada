<template>
    <div class="home">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    .home {
        width: 100%;
        height: 100vh;
        background-image: url(https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0f6908fa5e81286213c7211276e6b3d&auto=format&fit=crop&w=1500&q=80);
        background-position: center top;
        background-size: cover;
        color: white;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Quicksand", sans-serif;
        overflow: hidden;
    }
</style>
