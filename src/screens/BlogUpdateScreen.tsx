import {  useNavigate, useParams } from 'react-router-dom';
import { useBlogUpdateMutation, useGetBlogDetailQuery } from '../Apis/services/Blogs/blogApiSlice';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Button, Container, Form } from 'semantic-ui-react';
import { useForm, SubmitHandler  } from "react-hook-form"
import { Blog } from '../types/Blog';
import { useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const AlertSwal = withReactContent(Swal);

const BlogUpdateScreen = () => {
    const { id } = useParams();
    const [UpdateBlog]=useBlogUpdateMutation();
    const {data, isLoading }=useGetBlogDetailQuery(id!);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<Blog>();

    useEffect(() => {
      if (data) {
        setValue("id", data.id, { shouldValidate: true });
        setValue("Title", data.Title, { shouldValidate: true });
        setValue("Detail", data.Detail, { shouldValidate: true });
      }
    }, [data, setValue]);

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

      const onSubmit: SubmitHandler<Blog> = async (formData) => {
        try {
          debugger;
          await UpdateBlog(formData).unwrap();
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
        if(data!==undefined)
        {
            return (  
                  <>
                    <Container>
                        <Form onSubmit={handleSubmit(onSubmit)} className="form-content-side form-box-shadow" >
                        <Form.Field>
                            <input type="hidden"  {...register("id", { required: true },)}/>
                            {errors.Title && <p>This field is required</p>}
                            <label>Title</label>
                            <input  {...register("Title", { required: true })}/>
                            {errors.Title && <p>This field is required</p>}
                        </Form.Field>
                        <Form.Field>
                      <label>Detail</label> 
                      <div >
                          <CKEditor
                              editor={ ClassicEditor }
                              data={data.Detail}
                              onReady={ editor => {
                                editor.editing.view.change( writer => {
                                  writer.setStyle( 'height', '250px', editor.editing.view.document.getRoot()!);
                              } );;
                            } }
                              onChange={ ( event,editor ) => {
                                setValue("Detail", editor.getData(), { shouldValidate: true });
                              } }
                          />
                          <input placeholder='Detail'  {...register("Detail", { required: true })} style={{display:"none"}}/>
                          {errors.Detail && <p>This field is required</p>}
                      </div>
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
