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
                  >Firstname</span
               ><input v-model="firstName"
                  class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                  type="text"
                  placeholder="someonespecial@example.com"
               />
            </span>
            <span class="flex shadow-md mb-5 text-xs">
               <span
                  class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l"
                  >Lastname</span
               ><input v-model="lastName"
                  class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                  type="text"
                  placeholder="someonespecial@example.com"
               />
            </span>
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
               ><input v-model="password"
                  class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                  type="password"
                  placeholder=""
               />
            </span>
            <button @click="signupHandler()"
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
   name: 'Signup',
   data() {
      return {
         firstName: null,
         lastName: null,
         email: null,
         password: null,
      }
   },
   methods: {
      async signupHandler() {
         const data = {
            'first_name': this.firstName,
            'last_name': this.lastName,
            'email': this.email,
            'password': this.password
         }
         console.log(data);
         try {
             const res = await this.$axios.post('/register', data)
             this.$router.push('/login')
             console.log(res)
         }
         catch(e) {
             console.log(e.message)
         }
      }
   }
};
</script>

<style></style>
