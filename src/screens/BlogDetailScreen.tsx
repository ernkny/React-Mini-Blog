import { useParams } from 'react-router-dom';
import { useGetBlogDetailQuery } from '../Apis/services/Blogs/blogApiSlice';
import '../styles/BlogDetailScreen.css';
import { Container, Icon, Card, CardContent, Grid, GridRow } from 'semantic-ui-react';

const BlogDetailScreen = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetBlogDetailQuery(id!);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  const renderDetail = () => {
    if (data) {
      return (
        <Container>
          <Grid>
            <GridRow centered>
              <Card className='fullScreenContainer'>
                <CardContent style={{padding:"10px"}} header={data?.Title} />
                <Card.Description style={{padding:"20px"}} dangerouslySetInnerHTML={{ __html: data.Detail }}></Card.Description>
                <CardContent extra>
                  <Icon name='user' />{data?.Author}
                </CardContent>
              </Card>
            </GridRow>
          </Grid>
        </Container>
      );
    } else {
      return <p>Detail of data doesn't exist</p>;
    }
  };

  return renderDetail(); 
};

export default BlogDetailScreen;
