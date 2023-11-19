import { Button, Card, Container, Grid } from 'semantic-ui-react';
import  '../styles/HomeScreen.css'
import { Link } from 'react-router-dom';
import { useGetBlogsQuery } from '../Apis/services/BlogServiceApi';


 const HomeScreen = () => {

  const { data, error, isLoading } = useGetBlogsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    const renderBlogs = () => {
      if(data!== undefined){
          const rows = [];
          console.log(data)
          for (let i = 0; i < data.length; i += 4) {
            rows.push(
              <Grid.Row key={i} centered>
                {data.slice(i, i + 4).map((data, index) => (
                  <Grid.Column key={index} mobile={16} tablet={8} computer={4}>
                    <Card.Group id="blog-card" className="d-flex justify-content-center ">
                      <Card className='card-box-shadow card-content-side' >
                        <Card.Content>
                          <Card.Header>{data.Title}</Card.Header>
                          <Card.Meta>{data.Author}</Card.Meta>
                          <Card.Description>{data.Detail}</Card.Description>
                        </Card.Content>
                        <div className="link-container">
                          <Link color='blue' className="button-default btn-detail"  to={`http://localhost:5173/BlogDetail/${data.id}`}>Detail</Link>
                          <Link  color='blue' className="button-default" to={`http://localhost:5173/BlogDetail/${data.id}`}>Add Bookmark</Link> 
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
      }
        

  return (
      <>  
        <Container>
            <h1 ><span>Blogs</span></h1>
            <Grid columns={4} divided>
            <a href="/BlogAdd"><Button className='button-default btn-add' >Blog Add</Button></a>
            {renderBlogs()}
            </Grid>
          </Container>
      </>
  )
}

export default HomeScreen;