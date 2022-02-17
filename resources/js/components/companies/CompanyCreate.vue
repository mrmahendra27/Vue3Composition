<template>
<div v-if="errors">
      <div v-for="(v, k) in errors" :key="k" class="text-gray rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
        <p v-for="error in v" :key="error" class="text-sm">
          {{ error }}
        </p>
      </div>
    </div>
  <div>
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="mt-10 sm:mt-0">
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form @submit.prevent="saveCompany">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="name"
                      class="block text-sm font-medium text-gray-700"
                      >Name</label
                    >
                    <input
                      type="text"
                      id="name"
                      autocomplete="name"
                      v-model="form.name"
                      placeholder="Enter Name"
                      class="
                        mt-1
                        focus:ring-indigo-500 focus:border-indigo-500
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700"
                      >Email</label
                    >
                    <input
                      type="email"
                      id="email"
                      autocomplete="email"
                      v-model="form.email"
                      placeholder="Enter Email"
                      class="
                        mt-1
                        focus:ring-indigo-500 focus:border-indigo-500
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>

                  <div class="col-span-6">
                    <label
                      for="address"
                      class="block text-sm font-medium text-gray-700"
                      >Address</label
                    >
                    <input
                      type="text"
                      id="address"
                      autocomplete="address"
                      v-model="form.address"
                      placeholder="Enter address"
                      class="
                        mt-1
                        focus:ring-indigo-500 focus:border-indigo-500
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="website"
                      class="block text-sm font-medium text-gray-700"
                      >Website</label
                    >
                    <input
                      type="text"
                      id="website"
                      autocomplete="website"
                      v-model="form.website"
                      placeholder="Enter website url"
                      class="
                        mt-1
                        focus:ring-indigo-500 focus:border-indigo-500
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>
                </div>
              </div>
              <div class="px-6 py-6 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  class="
                    inline-flex
                    justify-center
                    py-2
                    px-4
                    border border-transparent
                    bg-gray-800
                    shadow-sm
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    bg-indigo-600
                    hover:bg-indigo-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-500
                  "
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import useCompanies from '../../composables/companies'
import { reactive } from 'vue'
export default {
  name: "CompanyCreate",
  setup() {
    const form = reactive({
      name: '',
      email: '',
      address: '',
      website: ''
    });

    const { errors, createCompany } = useCompanies();
    const saveCompany = async () => {
        await createCompany({...form})
    }
    return {
        form,
        errors,
        saveCompany
    }
  },
};
</script>