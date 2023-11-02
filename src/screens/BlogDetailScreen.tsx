import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import { Blog } from '../types/Blog';
import { getBlogDetail } from '../Apis/BlogApiCalls';
import { Container, TextArea,Form, Message, Header } from 'semantic-ui-react';


 const BlogDetailScreen = () => {
  const { id } = useParams();
  const[blog,setBlogState]=useState<Blog>()
  
  useEffect(() => {
    var idForFunction=parseInt(id!);
    const getBlogAsync=async () => {
      const blogData = await getBlogDetail(idForFunction);
      setBlogState(blogData);
    }; 
    getBlogAsync();
  }, [])
  
  return (
    <Container>
      <Form>
         <Header  color='teal' size='large'>{blog?.Title}</Header>
         <Message color='purple'>{blog?.Detail}</Message>
     </Form>
    </Container>
  )
}

export default BlogDetailScreen;
