<template>
	<div class="w-full h-screen flex">
		<img
			src="https://images.unsplash.com/photo-1540569876033-6e5d046a1d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
			alt="background"
			class="object-cover object-center h-screen w-7/12"
		/>
		<div
			class="bg-white flex flex-col justify-center items-center w-5/12 shadow-lg"
		>
			<h1 class="text-3xl font-bold text-blue-400 mb-2">LOGIN</h1>
			<div class="w-1/2 text-center">
				<span class="flex shadow-md mb-5 text-xs">
					<span
						class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l"
						>Email</span
					><input v-model="email"
						class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
						type="text"
						placeholder="someonespecial@example.com"
					/>
				</span>
				<span class="flex shadow-md mb-5 text-xs">
					<span
						class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l"
						>Password</span
					><input 
						v-on:keyup.enter="loginHandler()"
						v-model="password"
						class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
						type="password"
						placeholder=""
					/>
				</span>
				<button @click="loginHandler()"
					class="bg-blue-800 hover:bg-blue-900 text-white px-3 py-1 rounded text-lg focus:outline-none shadow"
				>
					Sign In
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
   name: 'Login',
   data() {
      return {
         email: null,
         password: null,
      }
   },
   methods: {
     async loginHandler() {
         const data = { 'email': this.email, 'password': this.password }
         try{
           const response = await this.$auth.loginWith('local', { data: data})
           this.$auth.$storage.setUniversal('email', response.data.email)
           await this.$auth.setUserToken(response.data.access_token, response.data.refresh_token)
           if(response.data.username) {
	           this.$router.push("/");
		        this.$store.dispatch("base/DataTable");
		        this.$store.dispatch("base/UsersList");
	           this.$toast.success('Successfully Logged In!')
           }
           else {
           	this.$toast.error(response.data.message)
           }
                                                                                                            
         } catch(e) {
            this.$toast.error('Invalid credentials')
         }
      }
   }
};
</script>
