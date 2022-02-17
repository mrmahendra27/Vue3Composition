<template>
  <div>
    <header class="px-5 py-4 border-b border-gray-100">
      <router-link
        :to="{ name: 'companies.create' }"
        class="
          inline-flex
          items-center
          px-4
          py-2
          bg-gray-800
          border border-transparent
          rounded-md
          font-semibold
          text-xs text-white
          uppercase
          tracking-widest
          hover:bg-gray-700
          active:bg-gray-900
          focus:outline-none focus:border-gray-900 focus:ring
          ring-gray-300
          disabled:opacity-25
          transition
          ease-in-out
          duration-150
        "
        >Create company</router-link
      >
    </header>
    <div class="p-3">
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <thead
            class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
          >
            <tr>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold">Name</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold">Email</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold">Address</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold">Website</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold">Action</div>
              </th>
            </tr>
          </thead>
          <tbody class="text-sm divide-y divide-gray-100">
            <template v-for="(company, i) in companies" :key="i">
              <tr>
                <td class="p-2 whitespace-nowrap">
                  <div class="font-medium text-center text-gray-800">
                    {{ company.name }}
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-center">{{ company.email }}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-center font-medium text-green-500">
                    {{ company.address }}
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-lg text-center">{{ company.website }}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-lg text-center">
                    <button
                      @click="deleteCompany(company.id)"
                      class="
                        inline-flex
                        items-center
                        px-4
                        py-2
                        bg-gray-800
                        border border-transparent
                        rounded-md
                        font-semibold
                        text-xs text-white
                        uppercase
                        tracking-widest
                        hover:bg-gray-700
                        active:bg-gray-900
                        focus:outline-none focus:border-gray-900 focus:ring
                        ring-gray-300
                        disabled:opacity-25
                        transition
                        ease-in-out
                        duration-150
                      "
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import useCompanies from "../../composables/companies";
export default {
  name: "CompanyIndex",
  setup() {
    const { companies, getCompanies, destroyCompany } = useCompanies();

    const deleteCompany = async (id) => {
      if (!window.confirm("you sure?")) {
        return;
      }

      await destroyCompany(id);
      await getCompanies();
    };
    onMounted(getCompanies);
    return {
      companies,
      deleteCompany,
    };
  },
};
</script>