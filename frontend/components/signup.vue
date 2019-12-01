<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Step 1</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Step 2</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="180px"
        >
        <!-- ehnii stepper -->
        <v-form v-model="valid">
          <v-container>
                <v-text-field
                  v-model="firstname"
                  :counter="10"
                  label="First name"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="lastname"
                  :counter="10"
                  label="Last name"
                  required
                ></v-text-field>

          </v-container>
        </v-form>

      </v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>
<!-- //ner email password password register -->
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="180px"
        >
        <!-- 2doh stepper -->
        <v-form v-model="valid">
          <v-container>
            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            name="input-10-2"
            label="Password"
            hint="At least 8 characters"
          ></v-text-field>
          </v-container>
        </v-form>
      </v-card>
        <v-btn
          color="primary"
          @click="signup()"
        >
          Submit
        </v-btn>
        <div>
        </div>
        <v-btn  text>Cancel</v-btn>
      </v-stepper-content>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
  export default {
    data: () => ({
      e1: 0,
      valid: false,
      firstname: '',
      lastname: '',
      password: '',
      email: '',
    }),
    methods:{
      async signup(){
        let res = await this.$axios.$post("http://localhost:8080/signup", {firstname: this.firstname,lastname: this.lastname,username: this.email, password: this.password})
        console.log(res);
        if(res.success){
          this.$router.push("/profile")
        } else {
          this.errorMessage = res.data.message;
          this.error = true;
        }
      }
    }
  }
</script>
