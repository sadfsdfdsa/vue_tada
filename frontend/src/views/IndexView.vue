<template>
    <div id="main">
        <!--        NAVIGATION-->
        <navigaton></navigaton>
        <!--        CONTENT-->
        <b-container>
            <!--            MESSAGES-->
            <b-row align-h="center" align-v="end">
                <b-col sm="8" class="messageCol messageDisplay" ref='messageDisplay'>
                    <b-row>
                        <b-col class="text-center"><strong>Welcome to the Chat!</strong></b-col>
                    </b-row>
                    <b-row v-for="(msg, index) in msgHistory" v-bind:key="index">
                        <b-col class="mt-1">
                            <user-message v-if="msg.name"
                                          :text="msg.text" :date="msg.created"
                                          :username="msg.name===username?'You':msg.name"></user-message>
                            <system-message v-else
                                            :text="msg.text" :date="msg.created"></system-message>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <!--            INPUTS-->
            <b-row align-h="center" class="fixed-bottom">
                <b-col sm="6">
                    <b-input-group>
                        <!--                        <b-form-input v-model="username" placeholder="Your name" disabled-->
                        <!--                                      style="max-width: 105px"></b-form-input>-->
                        <b-form-input v-model="msgInput" placeholder="Enter your message" ref="msgInput"></b-form-input>
                        <b-input-group-append>
                            <b-button variant="primary" @click="send_msg">Send</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import SystemMessage from "@/components/SystemMessage";
    import UserMessage from "@/components/UserMessage";
    import Navigaton from "@/components/Navigaton";

    export default {
        name: "IndexView",
        components: {Navigaton, UserMessage, SystemMessage},
        data: () => ({
            msgHistory: [],
            msgInput: '',
            username: 'test123',
            socket: null
        }),
        methods: {
            init_sock() {
                this.socket = new WebSocket('ws://pm.tada.team/ws?name=' + this.username);
                this.socket.onmessage = (event) => {
                    this.msgHistory.push(JSON.parse(event.data))
                }
            },
            send_msg() {
                if (this.msgInput) {
                    this.socket.send(JSON.stringify({
                        text: this.msgInput,
                        created: new Date()
                    }))
                    this.msgInput = ''
                    this.$refs.msgInput.$el.focus();
                }
            },
            scroll_to_bottom() {
                let messageDisplay = this.$refs.messageDisplay;
                messageDisplay.scrollTop = messageDisplay.scrollHeight;
            },
            keypressHold(event) {
                if (event.code === 'Enter') {
                    this.send_msg()
                }
            }
        },
        watch: {
            msgHistory: function () {
                setInterval(this.scroll_to_bottom, 1000);
            }
        },
        mounted() {
            this.init_sock();

            window.addEventListener('keypress', this.keypressHold)

            this.$refs.msgInput.$el.focus();
        },
        destroyed() {
            window.removeEventListener('keypress', this.keypressHold)
        }
    }
</script>

<style scoped>
    .messageDisplay {
        height: 89vh;
        min-height: 89vh;
        overflow-x: hidden;
    }

    .messageCol {
        background-color: rgba(0, 0, 0, 0.4);
    }

    /* width */
    ::-webkit-scrollbar {
        width: 15px;

    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: dodgerblue;
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: darkblue;
    }
</style>