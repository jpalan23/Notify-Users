<template>
    <div class="notify-user-view">
        <div class="left-img">
            <img src="@/assets/img/notifyMe.png" alt="subscribe-img" />
        </div>
        <NotifyUserForm />
    </div>
</template>

<script>
import NotifyUserForm from '@/components/NotifyUserForm'
export default {
    name: 'NotifyUserView',
    components:{
        NotifyUserForm
    }

}
</script>

<style lang="scss">
.notify-user-view{
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 7rem;
    padding: 0 2rem;
}
</style>