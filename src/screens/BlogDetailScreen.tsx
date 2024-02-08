import { useParams } from 'react-router-dom';
import { useGetBlogDetailQuery, useGetBlogsQuery } from '../Apis/services/Blogs/blogApiSlice';
import '../styles/BlogDetailScreen.css';
import { Container, Icon, Card, CardContent, Grid, GridRow } from 'semantic-ui-react';
import Slider from '../components/Slider';

const BlogDetailScreen = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetBlogDetailQuery(id!);
  const{data:blogData}=useGetBlogsQuery(1);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  const renderDetail = () => {
    if (data) {
      return (
        <Container>
          <Grid>
            <GridRow centered>
              <Card className='fullScreenContainer'>
                <CardContent style={{padding:"10px",fontSize:"1.5rem"}} header={data?.Title} />
                <Card.Description style={{padding:"20px"}} dangerouslySetInnerHTML={{ __html: data.Detail }}></Card.Description>
                <CardContent extra>
                  <Icon name='user' />{data?.Author}
                </CardContent>
              </Card>
            </GridRow>
          </Grid>
          {blogData && <Slider slides={blogData} interval={3000} />}
        </Container>
      );
    } else {
      return <p>Detail of data doesn't exist</p>;
    }
  };

  return renderDetail(); 
};

export default BlogDetailScreen;
