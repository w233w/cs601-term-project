<template>
    <form name="form" id="survey" @submit.prevent="submitForm">
        <label class="question">Rate my page</label><br>
        <input type="radio" id="1" name="rate" value="1" v-model="form.rate" required>
        <label for="1">1</label>
        <input type="radio" id="2" name="rate" value="2" v-model="form.rate">
        <label for="2">2</label>
        <input type="radio" id="3" name="rate" value="3" v-model="form.rate">
        <label for="3">3</label>
        <input type="radio" id="4" name="rate" value="4" v-model="form.rate">
        <label for="4">4</label>
        <input type="radio" id="5" name="rate" value="5" v-model="form.rate">
        <label for="5">5</label><br>

        <label class="question">Any hobby?</label><br>
        <input type="checkbox" id="movie" name="hobby" value="movie">
        <label for="ck1">Movie</label>
        <input type="checkbox" id="game" name="hobby" value="game">
        <label for="ck2">Game</label>
        <input type="checkbox" id="sport" name="hobby" value="sport">
        <label for="ck3">Sport</label><br>

        <label class="question">Let me know your idea.</label><br>
        <textarea placeholder="Enter your idea..." rows="4" cols="24" v-model="form.msg"></textarea><br>

        <label class="question">Want to talk more?</label><br>
        <input type="radio" id="Yes" value="Yes" name="askMore" v-model="picked">
        <label for="Yes">Yes</label>
        <input type="radio" id="No" value="No" name="askMore" v-model="picked">
        <label for="No">No</label><br>

        <div id="hidePart" v-show="displayHide">

            <label for="name" class="question">Your Name:</label><br>
            <input type="text" id="name" name="name" v-model="form.username"><br>
            <div id="error">{{ nameError }}</div>

            <label for="Email" class="question">Email:</label><br>
            <input type="text" id="Email" name="Email" v-model="form.email"><br>
            <div id="error">{{ emailError }}</div>

        </div>

        <input type="submit" value="Submit">
        <input type="reset" value="Reset">
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'My-form',
    data() {
        return {
            emailError: "",
            nameError: "",
            picked: '',
            form: {
                rate: Number,
                msg: '',
                email: '',
                username: '',
            }
        }
    },
    computed: {
        displayHide() {
            return this.picked == "Yes" ? true : false;
        }
    },
    watch: {
        email(input) {
            this.validateEmail(input);
        },
        username(input) {
            this.validateName(input);
        }
    },
    methods: {
        onlyAlpgbet(input) {
            return /^[a-zA-Z]+$/.test(input);
        },

        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        validateEmail(email) {
            if (this.validEmail(email) || email == "") {
                this.emailError = "";
                return true;
            }
            else {
                this.emailError = "Invalid email address.";
                return false;
            }
        },

        validateName(name) {
            if (name == "") {
                this.nameError = "";
                return true;
            }
            if (name.length < 2) {
                this.nameError = "Name must longer than 2 charcter.";
                return false;
            }
            else if (!this.onlyAlpgbet(name)) {
                this.nameError = "Name must contain only algphbet.";
                return false;
            }
            else {
                this.fnameError = "";
                return true;
            }
        },

        submitForm() {
            if (this.validateEmail(this.form.email) && this.validateName(this.form.username)) {
                console.log("pass");
                console.log(this.form)
                axios.post('http://localhost:8080/add', this.form)
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((error) => {
                        console.log(error);
                    }).finally(() => {
                        console.log("PASS");
                    });
                return ;
            }
            console.log("fail");
        }
    },
}
</script>

<style>
input,
textarea {
    outline-style: none;
    border: 1px solid #CCC;
    border-radius: 3px;
    margin: 8px 8px;
}

#survey {
    margin: 32px auto;
    padding: 32px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 20px lightgray;
    text-align: center;
    background-color: #E0E094
}

.question {
    border-bottom: 2px double #66ccff;
    margin-top: 60px;
}

#error {
    color: red;
    font-size: 12px;
}
</style>