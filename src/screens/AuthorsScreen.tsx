import React, { useRef } from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  Container,
  Grid,
  Image,
} from "semantic-ui-react";
import { useGetAllUserDetailQuery } from "../Apis/services/UserDetails/userDetailApiSlice";

const AuthorsScreen = () => {
  let pageNumber=useRef<number>(1)
  const { data: userDetails, isLoading, error } = useGetAllUserDetailQuery(pageNumber.current);

  if (isLoading) return <Container>...Loading</Container>;
  if (error) {
    console.log(error);
    return <Container>Error loading data</Container>;
  }

  const renderDetail = () => {
    if (userDetails && userDetails.length > 0) {
      return userDetails.map((item) => (
        <Grid.Column key={item.id}>
          <Card style={{ margin: "20px" }}>
            <Image src={item.ImageUrl} wrapped ui={false} />
            <CardContent>
              <CardHeader>{item.Name}</CardHeader>
              <CardDescription>
                {item.About}
              </CardDescription>
            </CardContent>
            <Button type="button">Blogs</Button>
          </Card>
        </Grid.Column>
      ));
    }
    return null;
  };

  return (
    <Container>
      <Grid>
        <Grid.Row columns={4}>
          {renderDetail()}
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row>
          <Button color="grey" fluid style={{ marginLeft: "24px" }}>Download More</Button>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default AuthorsScreen;
