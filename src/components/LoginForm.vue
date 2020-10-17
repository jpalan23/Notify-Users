<template>
    <div class="login-content">
        <form class="user-form" v-on:submit.prevent="onSubmit">
            <div class="top-right-icon" @click="changeRouteTo('admin')">
                <i class="fas fa-users-cog"></i>
            </div>
            <img src="@/assets/img/StartNotification.png" alt="start-notify" />
            <h2>Subscribe</h2>
            <div class="form-group">
                <div class="icon">
                    <i class="fas fa-user"></i>
                </div>
                <div class="form-input">
                    <h5>Name</h5>
                    <input v-model="username" @focus="addClassToParentDiv($event)" @blur="removeClassFromDiv($event)"
                        type="text" />
                </div>
            </div>
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
                    <i class="fas fa-mobile"></i>
                </div>
                <div class="form-input">
                    <h5>Phone Number</h5>
                    <input v-model="phoneNumber" @focus="addClassToParentDiv($event)" @blur="removeClassFromDiv($event)"
                        type="text" />
                </div>
            </div>
            <div class="">
                <button type="submit" class="form-btn">Subscribe</button>
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
        name: "LoginForm",
        mixins: [inputFormMixin],
        data() {
            return {
                username: '',
                email: '',
                phoneNumber: ''
            }
        },
        methods: {
            varifyInputs() {
                if (!this.usernameIsValid(this.username)) {
                    this.errorMsg = this.usernameErrorMsg;
                    return false;
                }

                if (!this.emailIsValid(this.email)) {
                    this.errorMsg = this.emailErrorMsg;
                    return false;
                }

                if (!this.phoneNumberIsValid(this.phoneNumber)) {
                    this.errorMsg = this.phoneNumberErrorMsg;
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
                console.log(this.username);
                console.log(this.email);
                console.log(this.phoneNumber);

                // Need to save it on backend
            },
        }
    }
</script>

<style lang="scss">
    .login-content {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: center;

        .user-form {
            width: 400px;
            display: block;
            position: relative;

            .top-right-icon{
                display: block;
                position: absolute;
                top: 0;
                right: 0;
                
                i{
                    font-size: 24px;
                    color: var(--main-color);
                }
            }

            img {
                height: 100px;
            }

            h2 {
                margin: 14px 0;
                text-transform: uppercase;
                font-size: 2.9rem;
            }

            .form-group {
                &::before {
                    right: 50%;
                }

                &::before,
                &::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    width: 0%;
                    height: 2px;
                    background-color: var(--main-color);
                    transition: .4s;
                }

                &:first {
                    margin-top: 0;
                }

                position: relative;
                display: grid;
                grid-template-columns: 7% 93%;
                margin: 25px 0;
                padding: 5px 0;
                border-bottom: 2px solid var(--light-main-color);

                div {
                    position: relative;
                    height: 45px;
                }

                .icon {
                    color: var(--light-main-color);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .form-input {
                    h5 {
                        position: absolute;
                        left: 10px;
                        top: 50%;
                        transform: translateY(-50%);
                        color: var(--light-main-color);
                        font-size: 18px;
                        transition: .3s;
                    }


                    input {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        border: none;
                        outline: none;
                        background: none;
                        padding: 0.5rem 0.7rem;
                        font-size: 1.2rem;
                        color: var(--font-color);
                        font-family: 'poppins', sans-serif;
                    }
                }

            }

            .form-group.focus {
                h5 {
                    top: -5px;
                    font-size: 15px;
                }

                .icon {
                    color: var(--secondary-color);
                }
            }

            .form-btn {
                display: block;
                width: 100%;
                height: 50px;
                border-radius: 25px;
                outline: none;
                border: none;
                background-image: linear-gradient(to right, #6C63FF, #6C63EF, #6C63FF);
                background-size: 200%;
                font-size: 1.2rem;
                color: #fff;
                font-family: 'Poppins', sans-serif;
                text-transform: uppercase;
                margin: 1rem 0;
                cursor: pointer;
                transition: .5s;
            }

            .error-msg {
                color: var(--secondary-color);
                font-weight: 600;
                font-size: 1.4rem;
            }

        }
    }
</style>