<template>
    <div id="main">
        <b-row style="font-size: 14px">
            <b-col>
                <em>{{text}}</em>
                <em style="font-size: 10px"> {{new Date(date).toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'})}}
                </em></b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "SystemMessage",
        props: ['text', 'date']
    }
</script>

<style scoped>

</style>