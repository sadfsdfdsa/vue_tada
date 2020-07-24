<template>
    <div id="main">
        <!--        NAVIGATION-->
        <navigaton></navigaton>
        <!--        CONTENT-->
        <b-container>
            <!--            MESSAGES-->
            <b-row align-h="center" align-v="end">
                <b-col sm="8" class="messageCol messageDisplay" ref='messageDisplay'>
                    <b-row v-if="!username">
                        <b-col class="text-center"><strong>Enter your name please</strong></b-col>
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
                        <b-form-input v-model="msgInput"
                                      :placeholder="username ? 'Enter your message' : 'Enter your name'"
                                      ref="msgInput"></b-form-input>
                        <b-input-group-append>
                            <b-button variant="primary" @click="send_msg">{{username ? 'Send' : 'Join'}}</b-button>
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
            username: null,
            socket: null
        }),
        methods: {
            init_sock() {
                // init socket
                this.socket = new WebSocket('ws://pm.tada.team/ws?name=' + encodeURIComponent(this.username));

                // on message
                this.socket.onmessage = (event) => {
                    this.msgHistory.push(JSON.parse(event.data))
                }

                // on close try to new connect
                this.socket.onclose = () => {
                    this.msgHistory.push(
                        {
                            text: 'Сообщение с сервером нарушено.',
                            created: new Date()
                        }
                    )
                    this.init_sock()
                }

                this.msgHistory.push(
                    {
                        text: 'Вы вошли в Chat!',
                        created: new Date()
                    }
                )
            },
            send_msg() {
                // send message
                if (this.username && /\S/.test(this.msgInput)) {
                    this.socket.send(JSON.stringify({
                        text: this.msgInput,
                        created: new Date()
                    }))
                    this.$refs.msgInput.$el.focus();
                    this.msgInput = ''
                    return;
                }

                // set and validate username
                if (!this.username && /\S/.test(this.msgInput)) {
                    this.username = this.msgInput;
                    this.msgHistory = [];
                    this.init_sock()
                    this.msgInput = ''
                } else if (!this.username) {
                    this.msgHistory.push(
                        {
                            text: 'Имя должно содержать символы.',
                            created: new Date()
                        }
                    )
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
            },
        },
        mounted() {
            window.addEventListener('keypress', this.keypressHold)
            this.$refs.msgInput.$el.focus();
        },
        watch: {
            msgHistory: function () {
                // timout for waiting rerender
                setTimeout(this.scroll_to_bottom, 300);
            }
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