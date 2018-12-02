<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <GridLayout columns="*" rows="*">
            <!-- <Label class="message" :text="msg" col="0" row="0"/> -->
            <Button :text="this.getCounter" @tap="test()" />
        </GridLayout>
    </Page>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import * as firebase from "nativescript-plugin-firebase";
import { firestore } from "nativescript-plugin-firebase";

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
        test: function() {
            console.log("_*_*_*_*_*_*")
            firebase.firestore.collection('test').add({
                test:'asd'
            })
        }
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
