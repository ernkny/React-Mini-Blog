import { Button, Container, Grid } from "semantic-ui-react";
import "react-confirm-alert/src/react-confirm-alert.css";
import "../styles/MyBlogsScreen.css";
import filteredDataCustomHooks from "../customHooks/filteredData";
import { useEffect, useState } from "react";
import BlogsComponent from "../components/BlogsComponent";

const MyBlogsScreen = () => {
  let [pageNumber, setPageNumber] = useState<number>(1);
  const { filteredData,refetch } = filteredDataCustomHooks(pageNumber);
  const pageNumberChange = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };
  const refetchDataAfterDelete=()=>{
    refetch()
  }
    useEffect(() => {}, [filteredData]);

    return (
      <>
        <Container>
          <h1 style={{ fontSize: "1.2rem" }}>
            <span>My Blogs</span>
          </h1>
          <Grid columns={4} divided>
            <a href="/BlogAdd">
              <Button className="button-default btn-add">Blog Add</Button>
            </a>
            {
              <BlogsComponent
                BlogData={filteredData}
                page={pageNumber}
                pageNumberChange={pageNumberChange} 
                refetchDataAfterDelete={refetchDataAfterDelete}/>
            }
          </Grid>
        </Container>
      </>
    );
};

export default MyBlogsScreen;
