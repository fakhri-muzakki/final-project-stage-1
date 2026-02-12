import data from "../data.js";

const renderHomePage = (req, res) => {
  res.render("pages/home", {
    title: "Home",
    layout: "layouts/main",
    ...data,
  });
};

const homeController = { renderHomePage };
export default homeController;
