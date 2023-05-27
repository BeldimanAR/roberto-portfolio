import styled from "styled-components";
import Image from "next/image";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Logo = styled.img`
  height: 50px;
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #915eff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
const ListItem = styled.li`
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="/logo.svg" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="/search.png" />
          <Button>Hire me now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
