<template>
    <div class="lcontainer">
		<div class="login-section">
			<div class="form">
				<div class="square">
					<div class="icon">
					</div>
					<div class="login-field">
						<div class="headline">
							<h1>Private Access</h1>
							<p>Sign to continue access pages</p>
						</div>
						<div class="">
							<v-text-field
							label="Email"
							type="email"
							color="#9874FF"
              v-model="username"
							></v-text-field>
							<v-text-field
							label="Password"
							type="password"
							color="#9874FF"
              v-model="password"
							></v-text-field>
						</div>
						<div class="login-section-btn"  @click ="submit()">
							<div></div>
              <!-- {{username}}
              {{password}} -->
							<div class="sbtn" style="font-size: 14px">Continue</div>
							<div class="sbtn" ><fa class="fa-icon" style="font-size: 14px" :icon="['fas', 'chevron-right']"/></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  data(){
    return{
      username: "",
      password: ""
    }
  },
  methods: {
    async submit(){
      let res = await this.$axios.$post("http://localhost:8080/adminLogin", {username: this.username , password: this.password});
      if(res.success){
        this.$cookies.set('_id', res.data._id, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7
        })
        this.$cookies.set('token', res.data.token, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7
        })
        this.$router.push("/secret")
      }
    }
  }
}
</script>
<style lang="css" scoped>
@media only screen and (max-width: 600px){
	.lcontainer{
		min-height: 100vh;
		width: 100%;
		background: linear-gradient(to left,#9874FF, #E68BFF);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.login-section{
		top: 0;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	.icon{
		/* background-image: url("../assets/login7/bg.png"); */
		background-position: center;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	.form{
		height: 100vh;
	}
	.square{
		height: 100%;
		display: grid;
		grid-template-rows: 46% 54%;
	}
	.round{
		width:300px;
		height: 300px;
		background-color: white;
		border-radius: 300px!important;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.icon .round img{
		width: 150px;
		overflow: hidden;
	}
	.login-field{
		background: white;
		padding: 20px;
	}
	.fa-icon{
		width: 14px;
		height: 14px;
		font-size: 14px;
	}
	.login-section-btn{
		display: grid;
		height: 40px;
		grid-template-columns: 15% 65% 20%;
		background: linear-gradient(to left ,#DB00B1, #6325B1);
		color: white;
		cursor: pointer;
		border-radius: 40px;
		font-size: 14px!important;
		margin: 20px 0;
	}
	.sbtn{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.headline h1{
		padding-bottom: 10px;
		color: #262626;
	}
	.headline p{
		font-size: 18px;
		padding: 15px 0;
		font-weight: 300;
	}
}
@media only screen and (min-width: 601px) and (max-width: 960px){
	.lcontainer{
		min-height: 100vh;
		background: linear-gradient(to left,#9874FF, #E68BFF);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.login-section{
		top: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.icon{
		/* background-image: url("../assets/login7/bg.png"); */
		background-position: center;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 380px;
	}
	.round{
		width:300px;
		height: 300px;
		background-color: white;
		border-radius: 300px!important;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.icon .round img{
		width: 150px;
		overflow: hidden;
	}
	.square{
		top: 0;
		display: grid;
		grid-template-rows: 380px auto;
	}
	.login-field{
		background: white;
		padding: 20px;
	}
	.fa-icon{
		width: 14px;
		height: 14px;
		font-size: 14px;
	}
	.login-section-btn{
		display: grid;
		grid-template-columns: 15% 65% 20%;
		background: linear-gradient(to left ,#DB00B1, #6325B1);
		color: white;
		cursor: pointer;
		border-radius: 40px;
		font-size: 14px!important;
	}
	.sbtn{
		height: 40px;
		text-transform: uppercase;
		font-weight: 300;
		letter-spacing: 3px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.headline h1{
		padding-bottom: 10px;
		color: #262626;
	}
	.headline p{
		padding: 15px 0;
		font-weight: 300;
	}
}
@media only screen and (min-width: 961px){
	.fa-icon{
		width: 14px;
		height: 14px;
		font-size: 14px;
	}
	.login-section-btn{
		display: grid;
		grid-template-columns: 15% 65% 20%;
		background: linear-gradient(to left ,#DB00B1, #6325B1);
		color: white;
		cursor: pointer;
		border-radius: 40px;
		font-size: 14px!important;
	}
	.sbtn{
		height: 40px;
		text-transform: uppercase;
		font-weight: 300;
		letter-spacing: 3px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.headline h1{
		padding-bottom: 10px;
		color: #262626;
	}
	.headline p{
		padding: 15px 0;
		font-weight: 300;
	}
	.icon{
		top: 0;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.login-field{
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.form{
		height: 100vh;
		width: 100vh;
		position: absolute;
		top: 0;
		border-radius: 100vh;
		z-index: 1;
		overflow: hidden;
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.square{
		height: 650px;
		width: 910px;
		background: white;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.lcontainer{
		min-height: 100vh;
		background: linear-gradient(to left,#9874FF, #E68BFF);
		margin: auto;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.login-section{
		width: 910px;
		height: 650px;
		/* background-image: url("../assets/login7/bg.png"); */
		background-position: center;
		background-size: cover;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
}
</style>
