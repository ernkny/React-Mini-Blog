import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useGetUserDetailQuery } from "../Apis/services/UserDetails/userDetailApiSlice";
import {
  useGetAllBlogsWithUserIdQuery,
  useGetBlogsWithUserIdQuery,
} from "../Apis/services/Blogs/blogApiSlice";
import { useGetUserQuery } from "../Apis/services/Users/userApiSlice";
import { useEffect } from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { render } from "react-dom";

interface props {
  id: string;
}

const ProfileComponent: React.FC<props> = ({ id }) => {
  console.log(id.toString());
  const { data: userDetail } = useGetUserDetailQuery(id);
  const { data: userBlogs } = useGetBlogsWithUserIdQuery({
    UserId: id,
    pageNumber: 1,
  });
  const { data: user } = useGetUserQuery(id);
  const { data: allUserBlogs } = useGetAllBlogsWithUserIdQuery({
    UserId: id,
    pageNumber: 1,
  });

  const truncateHtmlContent = (htmlContent: string, maxWords: number) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const textContent = doc.body.textContent || "";

    const words = textContent.split(/\s+/);
    if (words.length > maxWords) {
      const truncatedText = words.slice(0, maxWords).join(" ") + "...";
      return truncatedText;
    } else {
      return htmlContent;
    }
  };

  useEffect(() => {}, [id, userDetail, userBlogs, user]);
  const renderBlogs = () => {
    if (userBlogs !== undefined && userBlogs.length > 0) {
      const rows = [];
      for (let i = 0; i < userBlogs.length; i += 2) {
        rows.push(
          <Card.Group
          id="blog-card"
          className="d-flex justify-content-center"
        >
          <Card className="card-box-shadow card-content-side">
            <Card.Content>
              <Card.Header>{userBlogs[i].Title}</Card.Header>
              <Card.Meta>{userBlogs[i].Author}</Card.Meta>
              <Card.Description
                dangerouslySetInnerHTML={{
                  __html: truncateHtmlContent(userBlogs[i].Detail, 25),
                }}
              ></Card.Description>
            </Card.Content>
            <div className="link-container">
              <Link
                color="blue"
                className="button-default btn-detail"
                target="_blank"
                to={`http://localhost:5173/BlogDetail/${userBlogs[i].id}`}
              >
                Detail
              </Link>
              <Link
                color="blue"
                className="button-default"
                target="_blank"
                to={`http://localhost:5173/BlogDetail/${userBlogs[i].id}`}
              >
                Add Bookmark
              </Link>
            </div>
          </Card>
        </Card.Group>
        );
      }
      return rows;
    }
  };

  return (
    <div className="gradient-custom-2">
      {allUserBlogs && userDetail && userBlogs && user && (
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="9" xl="7">
              <MDBCard>
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: "#000", height: "200px" }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <MDBCardImage
                      src={userDetail[0].ImageUrl}
                      alt="Generic placeholder image"
                      className="mt-4 mb-2 img-thumbnail"
                      fluid
                      style={{ width: "150px", zIndex: "1" }}
                    />
                    <MDBBtn
                      outline
                      color="dark"
                      style={{ height: "36px", overflow: "hidden" }}
                    >
                      Edit profile
                    </MDBBtn>
                  </div>
                  <div className="ms-3" style={{ marginTop: "130px" }}>
                    <MDBTypography tag="h5">
                      {userDetail[0].Name} {userDetail[0].Surname}
                    </MDBTypography>
                    <MDBCardText>{userDetail[0].City}</MDBCardText>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex justify-content-end text-center py-1">
                    <div className="px-3">
                      <MDBCardText className="mb-1 h5">
                        {allUserBlogs?.length}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Blogs
                      </MDBCardText>
                    </div>
                  </div>
                </div>
                <MDBCardBody className="text-black p-4">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <MDBCardText className="font-italic mb-1">
                       {userDetail[0].About}
                      </MDBCardText>
                      <MDBCardText className="font-italic mb-1">
                        Lives in {userDetail[0].City}
                      </MDBCardText>
                      <MDBCardText className="font-italic mb-0">
                        Author
                      </MDBCardText>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <MDBCardText className="lead fw-normal mb-0">
                      Recent blogs
                    </MDBCardText>
                    <MDBCardText className="mb-0">
                    <Link
                color="blue"
                target="_blank"
                to={`http://localhost:5173/Blogs/${id}`}
              >
                Show All
              </Link>
                    </MDBCardText>
                  </div>
                  <MDBRow>
                    {renderBlogs()}
                    <MDBCol className="mb-2"></MDBCol>
                    <MDBCol className="mb-2"></MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )}
    </div>
  );
};

export default ProfileComponent;
