<template>
    <form @submit.prevent="submitForm" action="https://formspree.io/f/mrgwlqly" methods="POST"
        class="form-body container border rounded-5 py-3 shadow-lg mb-5">
        <div>
            <label class="floating-label">Client</label>
        </div>
        <div class="Category mb-3">
            <input type="text" class="info-input" placeholder="Enter FullName Here" v-model="contact.name" />
        </div>
        <div>
            <label for="">Email</label>
        </div>
        <div class="Category mb-3">
            <input type="email" class="info-input" placeholder="example@gmail.com" v-model="contact.email" />
        </div>
        <div>
            <label for="">Query</label>
        </div>
        <div class="py-auto">
            <textarea name="" id="" cols="30" rows="5" placeholder="Please state your query here"
                style="text-align: center; border-radius: 20px;" class="py-auto" v-model="contact.query"></textarea>
        </div>
        <!-- <div class="Category">
            <label for="">Email</label>
            <input type="email" class="info-input" placeholder="example@gmail.com" />
        </div> -->
        <div style="margin-left: auto;">
            <button type="submit" class="rounded-3" @click="handleButtonClick"
                :class="{ 'clicked': isClicked }">Submit</button>
        </div>
    </form>
</template>
<script>
import swal from 'sweetalert';
// const swal = SweetAlert();
export default {
    data() {
        return {
            contact: {
                name: "",
                email: "",
                query: ""
            },
            isClicked: false,
        }
    },
    methods: {
        submitForm() {
            if (!this.contact.name ||
                !this.contact.email ||
                !this.contact.query) {
                swal({
                    icon: 'error',
                    title: 'Oops..',
                    text: 'Fill out all fields to continue',
                })
                return; // Prevent form submission
            }
            else {
                swal("Good job!", "Form has been successfully submitted", "success")
            }
        },

        handleButtonClick() {
            // Toggle the isClicked state when the button is clicked

            if (!this.contact.name ||
                !this.contact.email ||
                !this.contact.query) {
                this.isClicked = this.isClicked;
            }
            else {
                this.isClicked = !this.isClicked;
            }

        },
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

form:hover {
    background: radial-gradient(black, grey);
}

input {
    width: 100px;
    border: 2px #333 dotted;
    text-align: center;
    transition: 0.5s ease-in-out;
    outline: none;
    color: grey;
}

textarea {
    outline: none;
    transition: 0.5s ease-in-out;
}

input::placeholder {
    font-size: 10px;
    text-align: center;
}

input:focus {
    border: 5px purple ridge;
    border-radius: 20px;
    width: 120px;
    color: black;
}

textarea:focus {
    border: 5px purple ridge;
}

button {
    box-shadow: inset -2px -2px #333;
}

.clicked {
    background-color: purple;
    color: white;
    border: 2px solid black;

}

/* .form-body {
    color: white;
    font-weight: bold;
    box-shadow: inset -12px 12px black;
    border-bottom: 2px black solid;
    border-left: 1px black solid;
    padding: 20px;
    border-radius: 5%;
    margin: 20px;
}

.Category {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}



input {
    font-family: 'Oswald', sans-serif;
    width: 20%;
    padding: 12px 20px;
    margin: 8px 0;
    background: white;
    border: 3px solid #ccc;
    border-radius: 10px;
    transition: 0.5s ease-in-out;
    outline: none;
    text-align: center;
    color: grey;
}
textarea{
    resize: none;
}


input:focus,textarea:focus {
    border: 4px solid black;
    color: black;
} */


/* .form-body:not(butt) {
    border-radius: 20px;
    padding: 10px;
    display: grid;
    grid-template-columns: auto auto;
    row-gap: 20px; */
/* } */
</style>