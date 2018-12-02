<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <GridLayout columns="*" rows="*">
            <!-- <Label class="message" :text="msg" col="0" row="0"/> -->
            <Button :text="this.getCounter" @tap="this.increment" />
            <Button text="Button Test ________" @tap="firebase.init" />
        </GridLayout>
    </Page>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'


export default {
    data() {
      return {
        msg: 'Hello World!'
      }
    },
    computed: {
        ...mapGetters([
            'getCounter',
        ])
    },
    methods: {
        ...mapMutations([
            'increment'
        ]),


        
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
