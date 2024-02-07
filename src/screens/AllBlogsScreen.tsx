import { Container, Grid } from "semantic-ui-react";
import "react-confirm-alert/src/react-confirm-alert.css";
import "../styles/MyBlogsScreen.css";
import filteredDataCustomHooks from "../customHooks/filteredData";
import { useEffect, useState } from "react";
import BlogsComponent from "../components/BlogsComponent";

const AllBlogsScreen = () => {
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
            <span>All Blogs</span>
          </h1>
          <Grid columns={4} divided>
            {
              <BlogsComponent
                BlogData={filteredData}
                page={pageNumber}
                pageNumberChange={pageNumberChange} 
                isMyBlogs={false}
                refetchDataAfterDelete={refetchDataAfterDelete}/>
            }
          </Grid>
        </Container>
      </>
    );
};

export default AllBlogsScreen;
