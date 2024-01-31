import { useEffect, useRef, useState } from "react";
import "../styles/AuthorScreen.css"
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
import { UserDetail } from "../types/UserDetail";
import Loading from "../modules/Loading";

const AuthorsScreen = () => {
  let pageNumber=useRef<number>(1)
  const { data: userDetails} = useGetAllUserDetailQuery(pageNumber.current);
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  const [itemsToDisplay,setItemsToDisplay]=useState<UserDetail[]>([]);
  useEffect(() => {
    if(userDetails && userDetails.length>0){
      setItemsToDisplay([...itemsToDisplay, ...userDetails]);
    }
  }, [userDetails])

  const downloadMoreAuthors=()=>{
    setPageLoading(true);
    setTimeout(() => {
      pageNumber.current=(pageNumber.current+1)
      setPageLoading(false);
    }, 1000);
   }

  const renderDetail = () => {
    if (itemsToDisplay && itemsToDisplay.length > 0) {
      return itemsToDisplay.map((item) => (
        <Grid.Column key={item.id}>
          <Card className="author-card">
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
      {pageLoading && (
            <div id="loading-wrapper">
              <Loading color={"#4F6F52"} />
            </div>
          )}
      <Grid>
        <Grid.Row>
          <Button color="grey" fluid onClick={downloadMoreAuthors}>Download More</Button>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default AuthorsScreen;
