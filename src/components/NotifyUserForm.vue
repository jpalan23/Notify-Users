<template>
  <div class="login-content">
        <form class="user-form" v-on:submit.prevent="onSubmit">
            <div class="top-right-icon" @click="logout()" >
                <i class="fas fa-sign-out-alt"></i>
            </div>
            <img src="@/assets/img/adminImage.png" alt="admin-image" />
            <h2>Message</h2>
            <div class="form-group">
                <div class="icon">
                    <i class="fas fa-comments"></i>
                </div>
                <div class="form-input">
                    <h5>Message</h5>
                    <input v-model="msg" @focus="addClassToParentDiv($event)" @blur="removeClassFromDiv($event)"
                        type="text" />
                </div>
            </div>
            <div class="">
                <button type="submit" class="form-btn">Notify Users</button>
            </div>
            <div v-if="errorInForm" class="error-msg">
                {{errorMsg}}
            </div>
        </form>
    </div>
</template>

<script>
import {
        inputFormMixin
    } from '../assets/js/inputFormMixins';
import * as auth from '../service/AuthService';
export default {
    name:'NotifyUserForm',
    mixins: [inputFormMixin],
    data() {
        return {
            msg:''
        }
    },
    methods: {
        onSubmit() {
            if (this.msg.replace(/\s/g, '').length < 6 || this.msg.length > 40) {
                this.errorMsg = 'Message length should be greater than 6 and less than 40';
                this.errorInForm = true;
                return;
            }
            this.errorMsg = ''
            this.errorInForm = false;
            this.$router.push({
                name: 'notify-user-view'
            });
        },
        logout(){
            auth.logout();
            this.changeRouteTo('logout')
        }
    },
}
</script>

<style>

</style>