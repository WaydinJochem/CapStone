<template>
    <div>
        <div>
            <slot />
            <div>
                <div>
                    <label for="">FirstName</label>
                    <input type="text" v-model="edit.firstName" />
                </div>
                <div>
                    <label for="">LastName</label>
                    <input type="text" v-model="edit.lastName" />
                </div>
                <div>
                    <label for="">Age</label>
                    <input type="number" v-model="edit.userAge" />
                </div>
                <div>
                    <label for="">Gender</label>
                    <input type="text" v-model="edit.Gender" />
                </div>
                <div>
                    <label for="">Role</label>
                    <input type="text" v-model="edit.userRole" />
                </div>
                <div>
                    <label for="">Email</label>
                    <input type="email" v-model="edit.emailAdd" />
                </div>
                <div >
                    <label for="">Password</label>
                    <input type="password" v-model="edit.userPwd" />
                </div>
                <div>
                    <label for="">Picture</label>
                    <input type="text"  v-model="edit.userURL" />
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        edit: Object,
    }
}
</script>
<style></style>