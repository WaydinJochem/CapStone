<template>
    
    <div class="add-products-div">
       <div class="add-products-inner">
           <slot />
           <div class="input-details-div">
               <div class="input-details-row">
                   <label for="">FirstName</label>
                   <input type="text" class="info-input" v-model="edit.firstName" />
               </div>
               <div class="input-details-row">
                   <label for="">LastName</label>
                   <input type="text" class="info-input" v-model="edit.lastName"/>
               </div>
               <div class="input-details-row">
                   <label for="">Age</label>
                   <input type="number" class="info-input" v-model="edit.userAge" />
               </div>
               <div class="input-details-row">
                   <label for="">Gender</label>
                   <input type="text" class="info-input" v-model="edit.Gender" />
               </div>
               <div class="input-details-row">
                   <label for="">Role</label>
                   <input type="text" class="info-input" v-model="edit.userRole" />
               </div>
               <div class="input-details-row">
                   <label for="">Email</label>
                   <input type="email" class="info-input" v-model="edit.emailAdd" />
               </div>
               <div class="input-details-row">
                   <label for="">Password</label>
                   <input type="password" class="info-input" v-model="edit.userPwd" />
               </div>
               <div class="input-details-row">
                   <label for="">Picture</label>
                   <input type="text" class="info-input" v-model="edit.userURL" />
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
<style>
   
</style>