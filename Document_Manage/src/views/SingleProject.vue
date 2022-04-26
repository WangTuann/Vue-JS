<script>
import feather from "feather-icons";
import ProjectHeader from "../components/projects/ProjectHeader.vue";
import ProjectInfo from "../components/projects/ProjectInfo.vue";
import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects.vue";

export default {
  name: "ProjectsPage",
  components: {
    ProjectHeader,
    ProjectInfo,
    ProjectRelatedProjects,
  },
  data: () => {
    return {
      singleProjectHeader: {
        singleProjectTitle: "Hệ thống quản lý văn bản hành chính",
        singleProjectDate: "Jul 26, 2021",
        singleProjectTag: "Văn bản hành chính",
      },
      projectImages: [
        {
          id: 1,
          title: "Kabul Project Management UI",
          img: require("@/assets/images/ui-project-1.jpg"),
        },
        {
          id: 2,
          title: "Kabul Project Management UI",
          img: require("@/assets/images/web-project-2.jpg"),
        },
        {
          id: 3,
          title: "Kabul Project Management UI",
          img: require("@/assets/images/mobile-project-2.jpg"),
        },
      ],
      projectInfo: {
        clientHeading: "THÔNG TIN VĂN BẢN",
        companyInfos: [
          {
            id: 1,
            title: "Cơ quan ban hành",
            details: "Bộ giáo dục và đào tạo",
          },
          {
            id: 2,
            title: "Loại văn bản",
            details: "Thông tư",
          },
          {
            id: 3,
            title: "Ngày ban hành",
            details: "20/05/2022",
          },
          {
            id: 4,
            title: "Hiệu lực",
            details: "Còn hiệu lực",
          },
        ],

        technologies: [
          {
            title: "Văn bản liên quan",
            techs: ["Thông tư", "Nghị định", "Nghị quyết"],
          },
        ],
        projectDetailsHeading: "Tóm tắt nội dung",
        projectDetails: [
          {
            id: 1,
            details: "Thông tư 05/2022/TT-GDDT",
          },
          {
            id: 2,
            details:
              "Thông tư sửa đổi, bổ sung một số điều của Quy định tiêu chuẩn, quy trình biên soạn, chỉnh sửa sách giáo khoa; tiêu chuẩn, tổ chức cá nhân biên soạn sách giáo khoa; tổ chức và hoạt động của Hội đồng quốc gia thẩm định sách giáo khoa ban hành kèm theo Thông tư số 33/2017/TT-BGDĐT ngày 22 tháng 12 năm 2017 của Bộ trưởng Bộ Giáo dục và Đào tạo",
          },
        ],
      },
      relatedProject: {
        relatedProjects: [],
      },
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="singleProjectHeader" />

    <!-- Project gallery -->
    <ProjectGallery :projectImages="projectImages" />

    <!-- Project information -->
    <ProjectInfo :projectInfo="projectInfo" />

    <!-- Project related projects -->
    <ProjectRelatedProjects :relatedProject="relatedProject" />
  </div>
</template>

<style scoped></style>
