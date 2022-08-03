<template>
    <form method="POST" action="https://bucs601.com/submit.php" name="form">
        <label class="question">Rate my page</label><br>
        <input type="radio" id="1" name="rate" value="1" v-model="rating">
        <label for="1">1</label>
        <input type="radio" id="2" name="rate" value="2" v-model="rating">
        <label for="2">2</label>
        <input type="radio" id="3" name="rate" value="3" v-model="rating" checked>
        <label for="3">3</label>
        <input type="radio" id="4" name="rate" value="4" v-model="rating">
        <label for="4">4</label>
        <input type="radio" id="5" name="rate" value="5" v-model="rating">
        <label for="5">5</label><br>
        <div id="error"></div>

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

            <label for="lastName" class="question">Last Name:</label><br>
            <input type="text" id="lastName" name="lastName" v-model="lnameInput"><br>
            <div id="error">{{ nameError }}</div>

            <label for="email" class="question">Email:</label><br>
            <input type="text" id="email" name="email" v-model="emailInput"><br>
            <div id="error">{{ emailError }}</div>

        </div>

        <input type="submit" value="Submit" onClick="return validation()">
        <input type="reset" value="Reset">
    </form>
</template>

<script>
export default {
    name: 'My-form',
    data() {
        return {
            lengthError: "Name must longer than 2 charcter",
            algphbetError: "Name must contain only algphbet",
            facilitatoError: "It is not the first name of our facilitator, please enter again.",
            ratioError: "You have to select your age.",
            emailError: "",
            nameError: "",
            rating: '',
            emailInput: '',
            fnameInput: '',
            lnameInput: '',
            picked: 'askMore'
        }
    },
    computed: {
        displayHide() {
            if (this.picked == "Yes")
                return true;
            else {
                return false;
            }
        }
    },
    watch: {
        emailInput(input) {
            this.validateEmail(input);
        },
        fnameInput(input) {
            this.validateName(input);
        },
        lnameInput(input) {
            this.validateName(input);
        },
    },
    methods: {
        onlyAlpgbet(input) {
            return /^[a-zA-Z]+$/.test(input);
        },

        validateEmail(email) {
            if (email.indexOf('@') > -1 || email == "") {
                this.emailError = "";
            }
            else {
                this.emailError = "Invalid email address.";
            }
        },

        validateName(name) {
            //firstName error
            if (name.length < 2) {
                this.nameError = "Name have to be more than 2 charactor.";
            }
            else if (!this.onlyAlpgbet(name)) {
                this.nameError = "Name only allow alphbet";
            }
            else if (name == ""){
                this.nameError = "";
            }
            else {
                this.nameError = "";
            }
        },

        //extra validation for ratio buttoms.
        validateRadioButtoms() {
            let radioButtoms = document.getElementsByName("age");

            for (const buttom of radioButtoms) {
                if (buttom.checked) {
                    document.getElementById("ratioError").innerHTML = "";
                    return;
                }
            }
            this.formErrorHandle("ratioError", this.ratioError);
        },

        validation() {
            this.validateName();
            this.validateFacilitator();
            this.validateRadioButtoms();
        },

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

form {
    margin: 32px auto;
    padding: 32px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 20px lightgray;
    text-align: center;
    background-color: rgb(231, 216, 119)
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