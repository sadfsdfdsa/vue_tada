<template>
    <div id="main">
        <b-row>
            <b-col>
                <strong style="font-size: 16px">{{username}}: </strong>
                <span style="font-size: 15px">{{text}}</span>
                <em style="font-size: 10px"> {{new Date(date).toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'})}}
                </em>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "UserMessage",
        props: ['text', 'date', 'username'],
    }
</script>

<style scoped>

</style>