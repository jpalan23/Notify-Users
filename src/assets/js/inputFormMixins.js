export const inputFormMixin ={
    data() {
        return {
            errorInForm:false,
            errorMsg:'',
            usernameErrorMsg:'Username should be greater than 3 chars and smaller than 25chars',
            emailErrorMsg:'Email Id inncorect',
            phoneNumberErrorMsg:'Phone Number inncorect',
            passwordErrorMsg:'Password should be more than 6 chars and less than 25',
        }
    },
    methods: {
        changeRouteTo(newRoute){
            let newRoutName = '';
            if(newRoute === 'admin'){
                newRoutName = 'admin-view';
            }else if(newRoute === 'subscribe'){
                newRoutName = 'home'
            }
            this.$router.push({
                name: newRoutName
            });
        },
        usernameIsValid(username){
            if(username.length <= 3 || username.length > 25 ){
                return false;
            }
            return true;
        },
        passwordIsValid(password){
            if(password.length <= 6 || password.length > 25 ){
                return false;
            }
            return true;
        },
        emailIsValid (email) {
            /*eslint-disable */
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
            /*eslint-enable */
        },
        phoneNumberIsValid (phoneNumber){
           return phoneNumber.match(/\d/g).length===10
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