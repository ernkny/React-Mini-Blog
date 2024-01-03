import { useForm, SubmitHandler } from "react-hook-form"
import { Blog } from '../types/Blog'
import { Button,Container,Form } from 'semantic-ui-react'
import { useBlogAddMutation } from '../Apis/services/Blogs/blogApiSlice';
import "../styles/BlogAddScreen.css"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const BlogAddScreen = () => {
  const [addBlog] = useBlogAddMutation();
  const AlertSwal = withReactContent(Swal);

  const ShowSuccessAlert = () => {
    AlertSwal.fire({
      title: <p>Blog Added</p>,
      text: 'Blog added to page.',
      icon: 'success',
      timer: 3000,
    });
  };

  const ShowErrorAlert = () => {
    AlertSwal.fire({
      title: <p>Error</p>,
      text: 'Blog Cannot Added To Page',
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
          await addBlog(data).unwrap();
          ShowSuccessAlert();
          reset()
        } catch (error) {
          ShowErrorAlert();
        } 
    };
     
  return (
    <Container>
        <Form onSubmit={handleSubmit(onSubmit)} className="form-content-side form-box-shadow" >
          <Form.Field>
            <label>Title</label>
            <input placeholder='Title'  {...register("Title", { required: true })}/>
            {errors.Title && <p>This field is required</p>}
          </Form.Field>
          <Form.Field>
            <label>Detail</label> 
            <textarea placeholder='Detail' {...register("Detail", { required: true })}/>
            {errors.Detail && <p>This field is required</p>}
          </Form.Field>
          <Button  className='button-default btn-submit' type='submit'>Submit</Button>
        </Form>
    </Container>
  )
}

export default BlogAddScreen