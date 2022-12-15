class Validation {
    constructor(form, fields) {
        this.form = form
        this.fields = fields
    }

    initialize() {
        this.validateOnEntry()
        this.validateOnSubmit()
    }

    validateOnSubmit() {
        let self = this

        this.form.addEventListener('submit', e => {
            e.preventDefault()
            self.fields.forEach(field => {
                const input = document.querySelector(`#${field}`)
                self.validateFields(input)
            })
        })
    }

    validateOnEntry() {
        let self = this
        this.fields.forEach(field => {
            const input = document.querySelector(`#${field}`)

            input.addEventListener('input', event => {
                self.validateFields(input)
            })
        })
    }

    validateFields(field) {
        // Check value empty
        if (field.value.trim() === "") {
            this.setStatus(field, "Please enter value", "failed")
        } else {
            this.setStatus(field, null, "success")
        }

        // check email validation
        if (field.name === "email") {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            console.log(re.test(String(field.value).toLowerCase()))

            if (re.test(field.value)) {
                this.setStatus(field, null, "success")
            } else {
                this.setStatus(field, "Please enter valid email address", "failed")
            }
        }

        // check email validation
        if (field.name === "password") {
            const re =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            console.log(re.test(String(field.value).toLowerCase()))

            if (re.test(field.value)) {
                this.setStatus(field, null, "success")
            } else {
                this.setStatus(field, "Please enter a strong password \n " +
                   "- At least one number.\n" +
                   "- At least one special character.", "failed")
            }
        }

        // check email validation
        if (field.name === "phone") {
            const re =  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
            console.log(re.test(String(field.value).toLowerCase()))

            if (re.test(field.value)) {
                this.setStatus(field, null, "success")
            } else {
                this.setStatus(field, "Please enter valid phone number \n " +
                    "- (123) 456-7890\n" +
                    "- (123)456-7890\n" +
                    "- 123-456-7890\n" +
                    "- 123.456.7890\n" +
                    "- 1234567890\n" +
                    "- +31636363634\n" +
                    "- 075-63546725\n" , "failed")
            }
        }


        // check password confirmed
        if (field.name === "password_confirm") {
            const passwordField = this.form.querySelector('#password')

            if (field.value === passwordField.value) {
                this.setStatus(field, null, "success")
            } else {
                this.setStatus(field, "Password doesn't match", "failed")
            }
        }
    }

    setStatus(field, message, status) {
        const parant = field.parentNode.parentNode

        // set success icon enable and remove error message
        if (status === 'success') {
            parant.classList.add("success");
            parant.classList.remove("failed");
            parant.querySelector('.text-danger').innerText = ''


            // show error message and hide success icon
        } else if (status === 'failed') {
            parant.classList.add("failed");
            parant.classList.remove("success");
            parant.querySelector('.text-danger').innerText =  message
        }
    }
}

const form = document.querySelector('.form')
const fields = ["name", "email", "password", "phone", "surname", "password_confirm"]

const validator = new Validation(form, fields)
validator.initialize()