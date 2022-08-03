<template>
    <el-form method="POST" action="/..." name="form" id="survey" @submit="checkForm">
        <label class="question">Rate my page</label><br>
        <input type="radio" id="1" name="rate" value="1" v-model="rating">
        <label for="1">1</label>
        <input type="radio" id="2" name="rate" value="2" v-model="rating">
        <label for="2">2</label>
        <input type="radio" id="3" name="rate" value="3" v-model="rating">
        <label for="3">3</label>
        <input type="radio" id="4" name="rate" value="4" v-model="rating">
        <label for="4">4</label>
        <input type="radio" id="5" name="rate" value="5" v-model="rating" required>
        <label for="5">5</label><br>

        <label class="question">Any hobby?</label><br>
        <input type="checkbox" id="movie" name="hobby" value="movie">
        <label for="ck1">Movie</label>
        <input type="checkbox" id="game" name="hobby" value="game">
        <label for="ck2">Game</label>
        <input type="checkbox" id="sport" name="hobby" value="sport">
        <label for="ck3">Sport</label><br>

        <label class="question">Let me know your idea.</label><br>
        <textarea placeholder="Enter your idea..." rows="4" cols="24"></textarea><br>

        <label class="question">Want to talk more?</label><br>
        <input type="radio" id="Yes" value="Yes" name="askMore" v-model="picked">
        <label for="Yes">Yes</label>
        <input type="radio" id="No" value="No" name="askMore" v-model="picked">
        <label for="No">No</label><br>

        <div id="hidePart" v-show="displayHide">

            <label for="firstName" class="question">First Name:</label><br>
            <input type="text" id="firstName" name="firstName" v-model="fnameInput"><br>
            <div id="error">{{ fnameError }}</div>

            <label for="lastName" class="question">Last Name:</label><br>
            <input type="text" id="lastName" name="lastName" v-model="lnameInput"><br>
            <div id="error">{{ lnameError }}</div>

            <label for="email" class="question">Email:</label><br>
            <input type="text" id="email" name="email" v-model="emailInput"><br>
            <div id="error">{{ emailError }}</div>

        </div>

        <input type="submit" value="Submit">
        <input type="reset" value="Reset">
    </el-form>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'My-form',
    data() {
        return {
            emailError: "",
            fnameError: "",
            lnameError: "",
            rating: Number,
            emailInput: '',
            fnameInput: '',
            lnameInput: '',
            picked: '',
            delivery: ref(false)
        }
    },
    computed: {
        displayHide() {
            return this.picked == "Yes" ? true : false;
        }
    },
    watch: {
        emailInput(input) {
            this.validateEmail(input);
        },
        fnameInput(input) {
            this.validatefName(input);
        },
        lnameInput(input) {
            this.validatelName(input);
        },
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

        validatefName(name) {
            if (name.length < 2) {
                this.fnameError = "Name must longer than 2 charcter.";
                return false;
            }
            else if (!this.onlyAlpgbet(name)) {
                this.fnameError = "Name must contain only algphbet.";
                return false;
            }
            else if (name == "") {
                this.fnameError = "";
                return true;
            }
            else {
                this.fnameError = "";
                return true;
            }
        },

        validatelName(name) {
            if (name.length < 2) {
                this.lnameError = "Name must longer than 2 charcter.";
                return false;
            }
            else if (!this.onlyAlpgbet(name)) {
                this.lnameError = "Name must contain only algphbet.";
                return false;
            }
            else if (name == "") {
                this.lnameError = "";
                return true;
            }
            else {
                this.lnameError = "";
                return true;
            }
        },

        checkFrorm(e) {
            if (this.validateEmail(this.emailInput) && this.validatefName(this.fnameInput) && this.validatelName(this.lnameInput)) {
                return true;
            }
            e.preventDefault();
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