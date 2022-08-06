import Layout from '../layout/Layout';
import styled from "styled-components"
import Input from '../elements/Input'

const WritingPage = () => {
  


  return (
    
    <StWriteContainer>
      <Layout>
      <div>
        <div>
        <StWritelabel>작성자</StWritelabel>  
        <Input type="text"/>
        </div>

        <div>
        <StWritelabel>제목</StWritelabel>  
        <Input type="text"/>
        </div>
        
        <div>
        <StWritelabel>내용</StWritelabel>  
        <StWriteContent/>
        </div>
        </div>
        </Layout>

        <div>
          <StWriteFormBtn>추가하기</StWriteFormBtn>
        </div>
        </StWriteContainer>
        

  );
};

export default WritingPage;

const StWriteContainer=styled.div`
  padding-left: 20px;
  padding-right: 20px;
`

const StWriteFormBtn=styled.button`
  width:98vw;
  height:50px;
  position:fixed;
  bottom:0;
  margin-bottom:20px;
  background-color:white;
  border:1px solid;
  border-color:#eee;
  border-radius:10px;
  cursor:pointer;
`

const StWritelabel =styled.label`
display:flex;
flex-direction:column;
margin-top:1%;
font-size:20px;
font-weight:bold;
`

const StWriteContent = styled.textarea`
  width:100%;
  height:250px;
  margin-top:15px;
  border:solid 1px;
  border-color:#eee;
  border-radius:10px;
  outline-color:#eee;
`