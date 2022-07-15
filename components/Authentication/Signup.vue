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
                  >Username</span
               ><input
                  v-model="username"
                  class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                  type="text"
                  placeholder="someonespecial@example.com"
               />
            </span>
            <span class="flex shadow-md mb-5 text-xs">
               <span
                  class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l"
                  >Email</span
               ><input
                  v-model="email"
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
                  v-model="password"
                  class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                  type="password"
                  placeholder=""
               />
            </span>
            <span class="flex shadow-md mb-5 text-xs">
               <span
                  class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l"
                  >Confirm password</span
               ><input
                  v-model="password2"
                  class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                  type="password"
                  placeholder=""
               />
            </span>
            <button
               @click="signupHandler()"
               class="bg-blue-800 hover:bg-blue-900 text-white px-3 py-1 rounded text-lg focus:outline-none shadow"
            >
               Sign In
            </button>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "Signup",
   data() {
      return {
         username: null,
         email: null,
         password: null,
         password2: null,
      };
   },
   mounted() {
      this.$nextTick(() => {
         if (this.$auth.user) {
            this.$router.push("/");
         }
      });
   },
   methods: {
      async signupHandler() {
         const data = {
            username: this.username,
            email: this.email,
            password: this.password,
            password2: this.password2,
         };
         const res = await this.$axios.post(
            "http://10.10.6.87/fastqc/api/v1/registration",
            data
         );
         if (res.data.message == "successfully registerd") {
            // console.log(res)
            this.$toast.success("Successfully registered!");
            this.$router.push("/login");
         } else if (res.data.message != "successfully registerd") {
            this.$toast.error(res.data.message);
         }
      },
   },
};
</script>

<style></style>
