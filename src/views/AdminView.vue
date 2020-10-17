<template>
    <div class="admin-view">
        <div class="left-img">
            <img src="@/assets/img/loginImage.png" alt="subscribe-img" />
        </div>
        <AdminForm />
    </div>
</template>

<script>
import AdminForm from '@/components/AdminForm'
export default {
    name: "AdminView",
    components:{
        AdminForm
    }
}
</script>

<style lang="scss">
.admin-view{
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 7rem;
    padding: 0 2rem;
}
</style>