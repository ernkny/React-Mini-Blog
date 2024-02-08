import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Grid } from "semantic-ui-react";
import BlogsComponent from "../components/BlogsComponent";
import filteredDataCustomHooks from "../customHooks/filteredData";
import { useProfileInformation } from "../store/Hooks/authHooks";
import { Blog } from "../types/Blog";
import { useGetBlogsWithUserIdQuery } from "../Apis/services/Blogs/blogApiSlice";
import { useFormState } from "react-hook-form";

const MyBlogsScreen = () => {
  let [pageNumber, setPageNumber] = useState<number>(1);
  const userInformation = useProfileInformation();
  const {data:userInformationData,isLoading,isError,refetch}=useGetBlogsWithUserIdQuery({
    pageNumber:pageNumber,
    UserId:userInformation![0].id.toString()
  });
 
  const pageNumberChange = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };
  function refetchDataAfterDelete(reload: boolean): void {
    refetch()
  }
    useEffect(() => {
     
    }, [userInformationData])
    
 
  useEffect(() => {
  
  }, [userInformation,]);

  return (
    <>
      <Container>
        <h1 style={{ fontSize: "1.2rem" }}>
          <span>My All Blogs</span>
        </h1>
        <Grid columns={4} divided>
          <a href="/BlogAdd">
            <Button className="button-default btn-add">Blog Add</Button>
          </a>
          { userInformationData &&
          <BlogsComponent
            BlogData={userInformationData}
            page={pageNumber}
            pageNumberChange={pageNumberChange}
            isMyBlogs={true}
            refetchDataAfterDelete={refetchDataAfterDelete}
          />
        }
        </Grid>
      </Container>
    </>
  );
};

export default MyBlogsScreen;
