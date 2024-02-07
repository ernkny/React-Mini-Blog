import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container, Grid } from "semantic-ui-react";
import BlogsComponent from "../components/BlogsComponent";
import { useGetBlogsWithUserIdQuery } from "../Apis/services/Blogs/blogApiSlice";
import { BlogsWithUserIdRequest } from "../Apis/services/Blogs/Models/BlogsWithUserIdRequest";
import { useGetUserDetailQuery } from "../Apis/services/UserDetails/userDetailApiSlice";
import { UserDetail } from "../types/UserDetail";
import { Blog } from "../types/Blog";
import "../styles/NoDataFound.css";

const BlogsScreen = () => {
  const { id } = useParams<{ id: string }>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { data: user, isLoading, isError } = useGetUserDetailQuery(id!);
  const [userDetail, setUserDetail] = useState<UserDetail[] | null>(user!);

  const blogWithUserId: BlogsWithUserIdRequest = {
    pageNumber,
    UserId: id!,
  };
  const { data: blogs } = useGetBlogsWithUserIdQuery(blogWithUserId);
  const [userBlogs, setUserBlogs] = useState<Blog[]>(blogs || []);

  useEffect(() => {
    if (user) {
      setUserDetail(user);
    }
  }, [user]);

  useEffect(() => {}, [userDetail]);

  useEffect(() => {
    if (blogs) {
      setUserBlogs(blogs);
    }
  }, [blogs]);

  const pageNumberChange = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  if (isLoading) return <>...loading</>;

  if (isError || !userDetail) return <>Error loading user detail.</>;

  return (
    <>
      <Container>
        <h1 style={{ fontSize: "1.2rem" }}>
          <span>
            {userDetail?.[0]
              ? `${userDetail[0].Name} ${userDetail[0].Surname} Blogs`
              : "No User Details Found"}
          </span>
        </h1>
        <Grid columns={4} divided>
          {blogs && (
            <BlogsComponent
              BlogData={blogs}
              page={pageNumber}
              isMyBlogs={false}
              pageNumberChange={pageNumberChange}
            />
          )}
        </Grid>
      </Container>
    </>
  );
};

export default BlogsScreen;
