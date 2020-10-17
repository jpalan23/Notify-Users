<template>
    <div class="login-content">
        <form class="user-form" v-on:submit.prevent="onSubmit">
            <img src="@/assets/img/StartNotification.png" alt="start-notify" />
            <h2>Subscribe</h2>
            <div class="form-group">
                <div class="icon">
                    <i class="fas fa-user"></i>
                </div>
                <div class="form-input">
                    <h5>Username</h5>
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
export default {
    name:"LoginForm",
    data() {
        return {
            username:'',
            email:'',
            phoneNumber:'',
            errorInForm:false,
            errorMsg:''
        }
    },
    methods: {
        emailIsValid (email) {
            /*eslint-disable */
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
            /*eslint-enable */
        },
        phoneNumberIsValid (phoneNumber){
           return phoneNumber.match(/\d/g).length===10
        },
        varifyInputs(){
            
            if(this.username.length <= 3 || this.username.length > 25 ){
                this.errorMsg = "Username should be greater than 3 chars and smaller than 25chars";
                return false;
            }

            if(!this.emailIsValid(this.email)){
                this.errorMsg = "Email Id inncorect";
                return false;
            }

            if(!this.phoneNumberIsValid(this.phoneNumber)){
                this.errorMsg = "Phone Number inncorect";
                return false;
            }
            return true
        },
        onSubmit(){
            if(this.username == '' || this.email == '' || this.phoneNumber == ''){
                this.errorMsg = "All fields are required!";
                this.errorInForm = true;
                return;
            }
            if(!this.varifyInputs()){
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
        addClassToParentDiv($event){
            // console.log($event);
            // $event.preventDefault();
            let parent = $event.target.parentNode.parentNode;
            parent.classList.add('focus')
        },
        removeClassFromDiv($event){
            // $event.preventDefault();
            let parent = $event.target.parentNode.parentNode;
            if($event.target.value == ''){
                parent.classList.remove("focus");
            }
        }
    },
    

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