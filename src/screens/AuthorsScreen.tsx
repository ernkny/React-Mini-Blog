import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Container,
  Grid,
  Image,
} from "semantic-ui-react";

const AuthorsScreen = () => {
  return (
    <Container>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Card style={{margin:"20px"}}>
              <Image src="src\pictures\1.png" wrapped ui={false} />
              <CardContent>
                <CardHeader>Daniel</CardHeader>
                <CardMeta>Joined in 2016</CardMeta>
                <CardDescription>
                  Daniel is a comedian living in Nashville.
                </CardDescription>
              </CardContent>
              <Button type="button">Blogs</Button>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card style={{margin:"20px"}}>
              <Image src="src\pictures\1.png" wrapped ui={false} />
              <CardContent>
                <CardHeader>Daniel</CardHeader>
                <CardMeta>Joined in 2016</CardMeta>
                <CardDescription>
                  Daniel is a comedian living in Nashville.
                </CardDescription>
              </CardContent>
              <Button type="button">Blogs</Button>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card style={{margin:"20px"}}>
              <Image src="src\pictures\1.png" wrapped ui={false} />
              <CardContent>
                <CardHeader>Daniel</CardHeader>
                <CardMeta>Joined in 2016</CardMeta>
                <CardDescription>
                  Daniel is a comedian living in Nashville.
                </CardDescription>
              </CardContent>
              <Button type="button">Blogs</Button>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card style={{margin:"20px"}}>
              <Image src="src\pictures\1.png" wrapped ui={false} />
              <CardContent>
                <CardHeader>Daniel</CardHeader>
                <CardMeta>Joined in 2016</CardMeta>
                <CardDescription>
                  Daniel is a comedian living in Nashville.
                </CardDescription>
              </CardContent>
              <Button type="button">Blogs</Button>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card style={{margin:"20px"}}>
              <Image src="src\pictures\1.png" wrapped ui={false} />
              <CardContent>
                <CardHeader>Daniel</CardHeader>
                <CardMeta>Joined in 2016</CardMeta>
                <CardDescription>
                  Daniel is a comedian living in Nashville.
                </CardDescription>
              </CardContent>
              <Button type="button">Blogs</Button>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card style={{margin:"20px"}}>
              <Image src="src\pictures\1.png" wrapped ui={false} />
              <CardContent>
                <CardHeader>Daniel</CardHeader>
                <CardMeta>Joined in 2016</CardMeta>
                <CardDescription>
                  Daniel is a comedian living in Nashville.
                </CardDescription>
              </CardContent>
              <Button type="button">Blogs</Button>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default AuthorsScreen;
