import {  useParams } from 'react-router-dom';
import { Container, Form, Message, Header } from 'semantic-ui-react';
import { useGetBlogDetailQuery } from '../Apis/services/Blogs/blogApiSlice';


 const BlogDetailScreen = () => {
  const { id } = useParams();
  if(id !== undefined){
    const {data}=useGetBlogDetailQuery(id);
    return (
      <Container>
        <Form>
           <Header  color='teal' size='large'>{data?.Title}</Header>
           <Message color='purple'>{data?.Detail}</Message>
       </Form>
      </Container>
    )
  }
}

export default BlogDetailScreen;
