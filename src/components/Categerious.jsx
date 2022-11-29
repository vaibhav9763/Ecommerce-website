import styled from "styled-components";
import { categories } from "../components/data";
import { mobile } from "../responsive";
import CategoryItem from "../components/CategeriItem";

const Container = styled.div`
  display: flex;
  border: 100px soldi green;
  padding: 20px;
  border: 0.8px solid gray;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
