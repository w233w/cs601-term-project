<template>
    <form method="POST" action="https://bucs601.com/submit.php" name="form">



        <label class="question">Age?</label><br>
        <input type="radio" id="teen" name="age" value="teen">
        <label for="op1">&lt; 18</label>
        <input type="radio" id="young" name="age" value="young">
        <label for="op2">18 to 24</label>
        <input type="radio" id="adult" name="age" value="adult">
        <label for="op3">24 to 36</label>
        <input type="radio" id="not-young" name="age" value="not-young">
        <label for="op3">&gt; 36</label><br>
        <div id="ratioError"></div>

        <label class="question">Any hobby?</label><br>
        <input type="checkbox" id="movie" name="hobby" value="movie">
        <label for="ck1">Movie</label>
        <input type="checkbox" id="game" name="hobby" value="game">
        <label for="ck2">Game</label>
        <input type="checkbox" id="sport" name="hobby" value="sport">
        <label for="ck3">Sport</label><br>

        <label class="question">Let me know your idea.</label><br>
        <textarea placeholder="Enter your idea..." rows="4" cols="20"></textarea><br>

        <label class="question">Want to talk more?</label><br>
        <input type="radio" id="Yes" value="Yes" name="askMore" v-model="picked">
        <label for="Yes">Yes</label>
        <input type="radio" id="No" value="No" name="askMore" v-model="picked">
        <label for="No">No</label><br>
        <div id="askForMore" :style="{ display: contectDisplay }">

            <label for="firstName" class="question">First Name:</label><br>
            <input type="text" id="firstName" name="firstName"><br>

            <label for="lastName" class="question">Last Name:</label><br>
            <input type="text" id="lastName" name="lastName"><br>
            <div id="nameError"></div>

            <label for="email" class="question">Email:</label><br>
            <input type="text" id="email" name="email"><br>
            <div id="emailError"></div>
        </div>

        <input type="submit" value="Submit" onClick="return validation()">
        <input type="reset" value="Reset" onClick="return validation()">
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
            name: '',
            email: '',
            picked: 'askMore',
            emailDisplay: 'none'
        }
    },
    watch: {
        picked(newPick) {
            if (newPick == "Yes") {
                this.contectDisplay = 'block';
            }
            if (newPick == "No") {
                this.contectDisplay = 'none';
            }
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
            event.preventDefault();
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
input, textarea {
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
    background-color: #FFF
}

.question {
    border-bottom: 2px double #66ccff;
    margin-top: 60px;
}

#askForMore {
    display: none;
}
</style>