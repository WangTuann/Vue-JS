<script>
import feather from "feather-icons";

export default {
  name: "HomePage",
  data: () => {
    return {
      theme: "",
    };
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <section
    class="
      flex flex-col
      sm:justify-between
      items-center
      sm:flex-row
      mt-12
      sm:mt-10
    "
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left">
      <h1
        class="
          font-general-semibold
          text-3xl
          md:text-3xl
          xl:text-4xl
          text-center
          sm:text-left
          text-ternary-dark
          dark:text-primary-light
          uppercase
        "
      >
        Hi, This is weDocs
      </h1>
      <p
        class="
          font-general-medium
          mt-2
          text-lg
          sm:text-xl
          xl:text-2xl
          text-center
          sm:text-left
          leading-none
          text-gray-400
        "
      >
        Document Management System
      </p>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/3 text-right float-right">
      <img
        v-if="theme === 'light'"
        src="@/assets/images/document.svg"
        alt="Document"
      />
      <img v-else src="@/assets/images/document-dark.svg" alt="Document" />
    </div>
  </section>
</template>

<style scoped></style>
