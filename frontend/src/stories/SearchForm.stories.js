import SearchForm from "../components/SearchForm/SearchForm";

export default {
  title: "Components/SearchForm",
  component: SearchForm,
};
const Template = (args) => <SearchForm {...args} />;

export const Search = Template.bind({});
