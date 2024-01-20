import { Button, Card, Container, Grid } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import  '../styles/HomeScreen.css'
import { Link, useNavigate } from 'react-router-dom';
import { useBlogDeleteMutation } from '../Apis/services/Blogs/blogApiSlice';
import  filteredDataCustomHooks from '../customHooks/filteredData';
import { useEffect, useRef, useState } from 'react';
import Loading from '../modules/Loading';
import { Blog } from '../types/Blog';




 const HomeScreen = () => {
  let [page, setPage] = useState(1)
  const [pageLoading,setPageLoading]=useState<boolean>(false);
  const { filteredData, refetch } = filteredDataCustomHooks(page);
  let [itemsToDisplay, setItemsToDisplay]= useState<Blog[]>(filteredData)
  const [deleteBlogMutation] = useBlogDeleteMutation();

 
  let navigate = useNavigate();
  
  const navigateToUpdate=(id:number)=>{
    navigate(`/BlogUpdate/${id}`);
  }

  useEffect(() => 
  {
    function handleScroll() {
      if (window.innerHeight+ window.scrollY >= document.body.scrollHeight) 
      {
        setPageLoading(true)
        setTimeout(() => {
          setPageLoading(false)
          setPage(prevPage => prevPage + 1);
          if(filteredData.length>0){
            console.log("filteredData",filteredData)
            setItemsToDisplay([...itemsToDisplay, ...filteredData])
          }
        }, 1000);
        
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
   
  }, [page,pageLoading,filteredData]);
 
  const confirmDelete = (id:number) => {
    confirmAlert({
      title: 'Onaylayın',
      message: 'Bu öğeyi silmek istediğinizden emin misiniz?',
      buttons: [
        {
          label: 'Evet',
          onClick: async () => {
            try {
              await deleteBlogMutation(id).unwrap();
              refetch()
            } catch (error) {
              // Hata işleme
            }
          }
        },
        {
          label: 'Hayır',
          onClick: () => {
            
          }
        }
      ]
    });
  };

  const renderBlogs = () => {
    if (itemsToDisplay !== undefined && itemsToDisplay.length > 0) {
      const rows = [];
      console.log("İtemToDisplay",itemsToDisplay)
      for (let i = 0; i < itemsToDisplay.length; i += 2) {
        rows.push(
            <Grid.Row centered key={i} id="blog-container">
              {itemsToDisplay.slice(i, i + 2).map((data:any, index) => (
                <Grid.Column key={index} mobile={16} tablet={16} computer={8}>
                  <Card.Group id="blog-card" className="d-flex justify-content-center">
                    <Card className='card-box-shadow card-content-side'>
                      <Card.Content>
                        <Card.Header>
                          <FontAwesomeIcon className="link-delete" icon={faTimes} size="lg" color="#862B0D" onClick={() => confirmDelete(data.id)} />
                        </Card.Header>
                        <Card.Header>
                          <FontAwesomeIcon className="link-delete" icon={faPenToSquare} size="lg" color="#B3A492" onClick={() => navigateToUpdate(data.id)} />
                        </Card.Header>
                        <Card.Header>{data.Title}</Card.Header>
                        <Card.Meta>{data.Author}</Card.Meta>
                        <Card.Description dangerouslySetInnerHTML={{ __html: data.Detail }}></Card.Description>
                      </Card.Content>
                      <div className="link-container">
                        <Link color='blue' className="button-default btn-detail" to={`http://localhost:5173/BlogDetail/${data.id}`}>Detail</Link>
                        <Link color='blue' className="button-default" to={`http://localhost:5173/BlogDetail/${data.id}`}>Add Bookmark</Link>
                      </div>
                    </Card>
                  </Card.Group>
                </Grid.Column>
              ))}
            </Grid.Row>
        );
      }
  
      return rows;
    }
  };
  
        

  return (
      <>  
        <Container>
            <h1 ><span>Blogs</span></h1>
            <Grid columns={4} divided>
            <a href="/BlogAdd"><Button className='button-default btn-add' >Blog Add</Button></a>
            {renderBlogs()}
           {pageLoading && 
           <div id="loading-wrapper">
                <Loading color={"#4F6F52"}/>
            </div>
            } 
            </Grid>
          </Container>
      </>
  )
}

export default HomeScreen;