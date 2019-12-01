<template lang="html">
  <v-layout>
  <body>
        <div class="header">
          <h2>Header</h2>
          <nuxt-link to="/login">Login</nuxt-link>
          <nuxt-link to="/signup">Signup</nuxt-link>
        </div>
        <div class="profile-background">
          <div class="button_cont" align="center"><a class="example_a" href="payment" target="_blank" rel="nofollow noopener">Хэтэвчээ цэнэглэх</a></div>
        </div>
        <div class="row">
          <div class="column con" id="con1" >
            <h3>Id: 123123</h3>
            <br>
            <img src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" width="100%" height="200px">
            <div class="profile-element">
              <h2>Hello, User</h2>
              <p class="vasmi">[company name]</p>
              <p><fa :icon="['fas', 'location-arrow']" class="icon"/>location: Ulaanbaatar, Mongolia</p>
              <p><fa :icon="['fas', 'phone']" class="icon"/>Phone number: +976 - 99111515 </p>
              <p><fa :icon="['fas', 'envelope-square']" class="icon"/>Email: User@gmail.com</p>
            </div>
          </div>
          <div class="column con" id="con2">
            <h2>About User</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="column con" id="con3">
            <h2>User Log</h2>
            <p>
              10 удаагийн дуудлага худалдаанд оролцсон6
            </p>
            <p>
              3 дуудлага худалдаанаас <b><i>морь</i></b>, <b><i>цаг</i></b>,<b><i> ус</i></b> авав.
            </p>
          </div>
        </div>

      <div class="footer">
        <p>Footer</p>
      </div>

</body>
  </v-layout>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
* {
  box-sizing: border-box;
}

body {
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
}

.con{
  text-align: justify;
  background: #314755;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #26a0da, #314755);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #26a0da, #314755); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.profile-element{
  padding: 15px;
}
.profile-element h2{
  font-weight: 700;
  color: #f1f1f1;
}
.profile-element p{
  text-align: center;
}
.icon{
  float: left;
  width: 25px;
  height: 25px;
  border-radius: 26px;
}
#con1{
  margin-right: 100px;
  margin-left: 50px;
  padding: 0;
  width: 300px !important;
  height: 500px;
  transform: translateY(-100px);
}
#con2, #con3{
  height: 400px;
}
#con1 h3{
  padding: 15px;
  color: gold;
  float: right;
}

/* Style the header */
.header {
  background-color: #f1f1f1;
  padding: 30px;
  text-align: center;
  font-size: 35px;
}
.profile-background {
  background: #77A1D3;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #E684AE, #79CBCA, #77A1D3);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #E684AE, #79CBCA, #77A1D3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  width: 100%;
  height: 200px;
  padding: 30px;
  text-align: center;
  font-size: 35px;
}

/* Container for flexboxes */
.row {
  display: -webkit-flex;
  display: flex;
}

/* Create three equal columns that sits next to each other */
.column {
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 20px;
  margin: 20px;
  height: 300px; /* Should be removed. Only for demonstration */
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
}

.example_a {
color: #fff !important;
text-transform: uppercase;
text-decoration: none;
background: #ed3330;
font-size: 15px;
float: right;
padding: 10px;
border-radius: 5px;
display: inline-block;
border: none;
transition: all 0.4s ease 0s;
}

.example_a:hover {
background: #434343;
letter-spacing: 1px;
-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.4s ease 0s;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
  .row {
    -webkit-flex-direction: column;
    flex-direction: column;
  }
}
</style>
