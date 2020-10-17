<template>
    <div class="login-content">
        <form class="user-form" v-on:submit.prevent="onSubmit">
            <div class="top-right-icon" @click="changeRouteTo('subscribe')" >
                <i class="fas fa-user"></i>
            </div>
            <img src="@/assets/img/adminImage.png" alt="admin-image" />
            <h2>Administrator</h2>
            <div class="form-group">
                <div class="icon">
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="form-input">
                    <h5>Email</h5>
                    <input v-model="email" @focus="addClassToParentDiv($event)" @blur="removeClassFromDiv($event)"
                        type="text" />
                </div>
            </div>
            <div class="form-group">
                <div class="icon">
                    <i class="fas fa-key"></i>
                </div>
                <div class="form-input">
                    <h5>Password</h5>
                    <input v-model="password" @focus="addClassToParentDiv($event)" @blur="removeClassFromDiv($event)"
                        type="password" />
                </div>
            </div>
            <div class="">
                <button type="submit" class="form-btn">Login</button>
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

    export default {
        name: 'AdminForm',
        mixins: [inputFormMixin],
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            varifyInputs() {
                if (!this.emailIsValid(this.email)) {
                    this.errorMsg = this.emailErrorMsg;
                    return false;
                }

                if (!this.passwordIsValid(this.password)) {
                    this.errorMsg = this.passwordErrorMsg;
                    return false;
                }
                return true
            },
            onSubmit() {
                if (!this.varifyInputs()) {
                    this.errorInForm = true;
                    return;
                }
                this.errorMsg = ''
                this.errorInForm = false;
                this.$router.push({
                    name: 'notify-user-view'
                });
            }
        },

    }
</script>

<style>

</style>