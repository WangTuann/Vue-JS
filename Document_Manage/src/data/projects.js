// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
  {
    id: 1,
    title: "Trường Đại học Đà Lạt",
    category: "Văn bản",
  },
  {
    id: 2,
    title: "Văn bản hành chính",
    category: "Văn bản",
    img: require("@/assets/images/mobile-project-2.jpg"),
  },
  {
    id: 3,
    title: "Văn bản hành chính",
    category: "Văn bản",
    img: require("@/assets/images/ui-project-1.jpg"),
  },
  {
    id: 4,
    title: "Bộ giáo dục và Đào tạo",
    category: "UI/UX Design",
    img: require("@/assets/images/ui-project-2.jpg"),
  },
  {
    id: 5,
    title: "Văn bản hành chính",
    category: "Văn bản",
    img: require("@/assets/images/mobile-project-1.jpg"),
  },
  {
    id: 6,
    title: "Văn bản hành chính",
    category: "Văn bản",
    img: require("@/assets/images/web-project-1.jpg"),
  },
];

export default projects;
