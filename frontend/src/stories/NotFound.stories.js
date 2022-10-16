import NotFound from "../pages/NotFound/NotFound";

export default {
  title: "Pages/NotFound",
  component: NotFound,
};
const Template = (args) => <NotFound {...args} />;

export const NotFoundPage = Template.bind({});
