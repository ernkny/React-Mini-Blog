import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Grid } from 'semantic-ui-react';
import  '../styles/HomeScreen.css'
import { Blog } from '../types/Blog';
import { getBlogs } from '../Apis/BlogApiCalls';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import BlogDetailScreen from './BlogDetailScreen';
import { API_URL } from '../Apis/API_URL';





 const HomeScreen = () => {
    const [blogs,stateBlogs]=useState<Blog[]>([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogData = await getBlogs();
      stateBlogs(blogData);
    };

      fetchBlogs();
    
  }, [])


    const renderBlogs = () => {
        const rows = [];
        for (let i = 0; i < blogs.length; i += 4) {
          rows.push(
            <Grid.Row key={i}>
              {blogs.slice(i, i + 4).map((blog, index) => (
                <Grid.Column key={index} mobile={16} tablet={8} computer={4}>
                  <Card.Group>
                    <Card>
                      <Card.Content>
                        <Card.Header>{blog.Title}</Card.Header>
                        <Card.Meta>{blog.Type}</Card.Meta>
                        <Card.Description>{blog.Detail}</Card.Description>
                      </Card.Content>
                      <Link className="button-default" to={`http://localhost:5173/BlogDetail/${blog.id}`}>Detail</Link>
                    </Card>
                  </Card.Group>
                </Grid.Column>
              ))}
            </Grid.Row>
          );
        }
        return rows;
      };

  return (<>  
      <Container>
          <h1>Blogs</h1>
          <Grid columns={4} divided>
          {renderBlogs()}
        </Grid>
          </Container>
      </>

      
  )
}

export default HomeScreen;