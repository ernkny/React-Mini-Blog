import {  useNavigate, useParams } from 'react-router-dom';
import { useBlogUpdateMutation, useGetBlogDetailQuery } from '../Apis/services/BlogServiceApi';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Button, Container, Form } from 'semantic-ui-react';
import { useForm, SubmitHandler } from "react-hook-form"
import { Blog } from '../types/Blog';
const AlertSwal = withReactContent(Swal);

const BlogUpdateScreen = () => {
    const { id } = useParams();
    const [UpdateBlog]=useBlogUpdateMutation();
    const {data, isLoading }=useGetBlogDetailQuery(id!);
   
    
    let navigate = useNavigate();
    const ShowSuccessAlert = () => {
        AlertSwal.fire({
          title: <p>Blog Added</p>,
          text: 'Blog Updated.',
          icon: 'success',
          timer: 3000,
        });
      };
    
      const ShowErrorAlert = () => {
        AlertSwal.fire({
          title: <p>Error</p>,
          text: 'Blog Cannot Updated',
          icon: 'error',
          timer: 3000,
        });
      };
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm<Blog>()
      const onSubmit: SubmitHandler<Blog> = async (data) =>{
        try {
          await UpdateBlog(data).unwrap();
          ShowSuccessAlert()
          navigate('/');
        }
        catch   
         {
            ShowErrorAlert()
            navigate('/');
         }
    };
    if (isLoading) {
        return <div>Loading...</div>;
      }
    if(id !== undefined )
    {
        console.log(data)
        if(data!==undefined)
        {
            return (  <>
                <Container>
                       <Form onSubmit={handleSubmit(onSubmit)} className="form-content-side form-box-shadow" >
                       <Form.Field>
                           <input type="hidden" value={data?.id} {...register("id", { required: true },)}/>
                           {errors.Title && <p>This field is required</p>}
                           <label>Title</label>
                           <input value={data?.Title} {...register("Title", { required: true })}/>
                           {errors.Title && <p>This field is required</p>}
                       </Form.Field>
                       <Form.Field>
                           <label>Detail</label> 
                           <textarea value={data?.Detail}  {...register("Detail", { required: true })}/>
                           {errors.Detail && <p>This field is required</p>}
                       </Form.Field>
                       <Button  className='button-default btn-submit' type='submit'>Submit</Button>
                       </Form>
                   </Container>
                </>
                )
            }
        else
        {
            const ShowErrorAlert = () => {
                AlertSwal.fire({
                  title: <p>Error</p>,
                  text: 'Blog Not Found',
                  icon: 'error',
                  timer: 3000,
                });
                navigate("/");
              };
              return <>{ShowErrorAlert()}</>;
        }
    } 
   else
   {

    return (<>{ShowErrorAlert()}</>)

   }
}
export default BlogUpdateScreen
