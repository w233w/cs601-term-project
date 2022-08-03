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
            <input type="text" id="firstName" name="firstName"><br>

            <label for="lastName" class="question">Last Name:</label><br>
            <input type="text" id="lastName" name="lastName"><br>
            <div id="error"></div>

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
            name: '',
            emailInput: '',
            picked: 'askMore',
            contectDisplay: 'none',
            rating: ''
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
        }
    },
    methods: {
        reset() {
            this.name = "";
            this.email = "";
        },
        formErrorHandle(errorId, message) {
            document.getElementById(errorId).style.color = "red";
            document.getElementById(errorId).innerHTML = message;
            this.preventDefault();
        },

        validateEmail(email) {
            if (email.indexOf('@') > -1) {
                this.emailError = "";
            }
            else {
                this.emailError = "Invalid email address.";
            }
        },

        //validation a
        validateName() {
            let fName = document.form.firstName.value;
            let lName = document.form.lastName.value;

            function onlyAlpgbet(input) {
                return /^[a-zA-Z]+$/.test(input);
            }

            //firstName error
            if (fName.length < 2) {
                this.formErrorHandle("nameError1", this.lengthError);
            }
            else if (!onlyAlpgbet(fName)) {
                this.formErrorHandle("nameError1", this.algphbetError);
            }
            else {
                document.getElementById("nameError1").innerHTML = "";
            }

            //lastName error
            if (lName.length < 2) {
                this.formErrorHandle("nameError2", this.lengthError);
            }
            else if (!onlyAlpgbet(lName)) {
                this.formErrorHandle("nameError2", this.algphbetError);
            }
            else {
                document.getElementById("nameError2").innerHTML = "";
            }
        },

        //validation b
        validateFacilitator() {
            let input_facilitator = document.form.facilitator.value;
            let all_facilitator = ["Vijai", "Andrew"];

            if (all_facilitator.includes(input_facilitator)) {
                document.getElementById("facilitatorError").innerHTML = "";
                return;
            }
            this.formErrorHandle("facilitatorError", this.facilitatoError);
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