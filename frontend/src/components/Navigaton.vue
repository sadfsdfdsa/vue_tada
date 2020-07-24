<template>
    <div id="nav">
        <b-container fluid>
            <b-row class="navbar-row" align-v="center">
                <b-col sm="8"><h4><span class="navbar-row-logo">Chat</span></h4></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Navigaton"
    }
</script>

<style scoped>
    .navbar-row {
        /*background-color: rgba(0, 0, 0, 0.4);*/
        height: 50px;
    }

    .navbar-row-logo:hover {
        color: dodgerblue;
        cursor: pointer;
    }
</style>