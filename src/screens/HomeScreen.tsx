import { useEffect, useState } from 'react'
import { Button, Card, Container, Grid } from 'semantic-ui-react';
import  '../styles/HomeScreen.css'
import { Blog } from '../types/Blog';
import { getBlogs } from '../Apis/BlogApiCalls';
import { Link } from 'react-router-dom';


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
            <Grid.Row key={i} centered>
              {blogs.slice(i, i + 4).map((blog, index) => (
                <Grid.Column key={index} mobile={16} tablet={8} computer={4}>
                  <Card.Group id="blog-card" className="d-flex justify-content-center ">
                    <Card className='card-box-shadow card-content-side' >
                      <Card.Content>
                        <Card.Header>{blog.Title}</Card.Header>
                        <Card.Meta>{blog.Author}</Card.Meta>
                        <Card.Description>{blog.Detail}</Card.Description>
                      </Card.Content>
                      <div className="link-container">
                        <Link color='blue' className="button-default btn-detail"  to={`http://localhost:5173/BlogDetail/${blog.id}`}>Detail</Link>
                        <Link  color='blue' className="button-default" to={`http://localhost:5173/BlogDetail/${blog.id}`}>Add Bookmark</Link> 
                      </div>
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
            <h1 ><span>Blogs</span></h1>
            <Grid columns={4} divided>
            <Button className='button-default btn-add' ><a href="/BlogAdd" style={{color: "white"}}>Blog Add</a></Button>
            {renderBlogs()}
            </Grid>
          </Container>
      </>

      
  )
}

export default HomeScreen;