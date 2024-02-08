import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/Auth/authApi";

const Login = () => {
  const {register, handleSubmit} = useForm({
    defaultValues:{
      id:'A-000',
      password: 'Admin123'
    }
  });
  const [login , {data , error}]= useLoginMutation();
  console.log('dsfsdfsd',data);
  console.log('eeee',error);
  const onSubmit = (data) => {
   const userInfo = {
    id:data.id,
    password:data.password,
   }
   login(userInfo)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text"  id="id" {...register('id')} />
      </div>
      <div>
        <label htmlFor="Password">Password:</label>
        <input type="text"id="Password" {...register('password')} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
