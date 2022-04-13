<script>
import ThemeSwitcher from "../ThemeSwitcher";

import feather from "feather-icons";
import Button from "../reusable/Button.vue";
import ProjectsFilter from "../projects/ProjectsFilter.vue";

export default {
  components: {
    ThemeSwitcher,
    ProjectsFilter,
    Button,
  },
  data() {
    return {
      selectedCategory: "",
      searchProject: "",
      isOpen: false,
      theme: "",
      modal: false,
      categories: [
        {
          id: 1,
          value: "web",
          name: "Web Application",
        },
        {
          id: 2,
          value: "mobile",
          name: "Mobile Application",
        },
        {
          id: 3,
          value: "ui-ux",
          name: "UI/UX Design",
        },
        {
          id: 4,
          value: "branding",
          name: "Branding & Anim",
        },
      ],
    };
  },
  computed: {
    // Get the filtered projects
    filteredProjects() {
      if (this.selectedCategory) {
        return this.filterProjectsByCategory();
      } else if (this.searchProject) {
        return this.filterProjectsBySearch();
      }
      return this.projects;
    },
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
  },
  methods: {
    // Filter projects by category
    filterProjectsByCategory() {
      return this.projects.filter((item) => {
        let category =
          item.category.charAt(0).toUpperCase() + item.category.slice(1);
        console.log(category);
        return category.includes(this.selectedCategory);
      });
    },
    // Filter projects by title search
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, "i");
      return this.projects.filter((el) => el.title.match(project));
    },
    updateTheme(theme) {
      this.theme = theme;
    },
    // showModal() {
    //   if (this.modal) {
    //     // Stop screen scrolling
    //     document
    //       .getElementsByTagName("html")[0]
    //       .classList.remove("overflow-y-hidden");
    //     this.modal = false;
    //   } else {
    //     document
    //       .getElementsByTagName("html")[0]
    //       .classList.add("overflow-y-hidden");
    //     this.modal = true;
    //   }
    // },
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <nav id="nav" class="sm:container sm:mx-auto">
    <!-- Header start -->
    <div
      class="
        z-10
        max-w-screen-lg
        xl:max-w-screen-xl
        block
        sm:flex sm:justify-between sm:items-center
        my-6
      "
    >
      <!-- Header menu links and small screen hamburger menu -->
      <div class="flex justify-between items-center px-4 sm:px-0">
        <!-- Header logos -->
        <div>
          <router-link to="/"
            ><img
              v-if="theme === 'light'"
              src="@/assets/images/logo-dark.svg"
              class="w-36"
              alt="Dark Logo"
            />
            <img
              v-else
              src="@/assets/images/logo-light.svg"
              class="w-36"
              alt="Light Logo"
            />
          </router-link>
        </div>

        <!-- Small screen hamburger menu -->
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="focus:outline-none"
            aria-label="Hamburger Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="
                h-7
                w-7
                fill-current
                text-secondary-dark
                dark:text-ternary-light
              "
            >
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                clip-rule="evenodd"
              ></path>
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Filter and search projects -->
      <div
        class="
          grow
          m-0
          sm:ml-4
          mt-5
          sm:mt-3 sm:flex
          p-5
          sm:p-0
          sm:shadow-none
        "
      >
        <div class="flex justify-between pb-3 gap-2">
          <ProjectsFilter @filter="selectedCategory = $event" />

          <div class="flex justify-between gap-2">
            <input
              v-model="searchProject"
              class="
                font-general-medium
                pl-3
                pr-1
                sm:px-4
                py-2
                border-1 border-gray-200
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
              "
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Documents"
              aria-label="Name"
            />
          </div>
        </div>
      </div>
      <!-- Header right section buttons -->
      <div
        class="hidden sm:flex justify-between items-center flex-col md:flex-row"
      >
        <!-- Hire me button -->
        <div class="hidden md:block">
          <Button
            title="Request Docs"
            class="
              text-md
              font-general-medium
              bg-slate-500
              hover:bg-slate-600
              text-white
              shadow-sm
              rounded-md
              px-5
              py-2.5
              duration-300
            "
            @click="showModal()"
            aria-label="Request Document"
          />
        </div>

        <!-- Theme switcher large screen -->
        <theme-switcher
          :theme="theme"
          @themeChanged="updateTheme"
          class="
            ml-8
            bg-primary-light
            dark:bg-ternary-dark
            px-3
            py-2
            shadow-sm
            rounded-xl
            cursor-pointer
          "
        />
      </div>
    </div>

    <!-- Hire me modal -->
    <HireMeModal
      :showModal="showModal"
      :modal="modal"
      :categories="categories"
      aria-modal="Hire Me Modal"
    />
  </nav>
</template>

<style scoped>
#nav a.router-link-exact-active {
  @apply text-indigo-700;
  @apply dark:text-indigo-400;
  @apply font-medium;
}
</style>
