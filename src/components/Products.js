import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react"

const Container = styled.div`
    padding-top:10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Title = styled.h2`
text-align: center;
display: flex;
justify-content: center;
font-weight: 900;

`;

const SearchContainer = styled.div`
background-color: #f2eaea;
display: flex;
justify-content: center;
align-items: center;

padding: 40px;

`;

const Input = styled.input`
display:flex;
width:80%;
justify-content: center;
align-items: center;
padding: 8px 30px;
font-size:15px;
border-radius:5px;


`;


const Products = (props) => {

 
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>

<SearchContainer>
      
          
      <SearchIcon style={{color:"grey",fontSize:"30px",marginRight:"5px"}} /> 
     <Input type="text"  placeholder="male,womens,jackets,cap" onChange={event=> {
      console.log(searchTerm)
      setSearchTerm(event.target.value) }} />
 
    </SearchContainer>
  
    <Container>

    
      {popularProducts.filter((value)=>{

        if (searchTerm===""){
         
          return value
         
        }else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())){
          console.log(value.title)
          return value
        }
      }).map((item) => (
        
        <Product item={item} key={item.id} />
      ))}
    </Container>
    </>
  );
};

export default Products;