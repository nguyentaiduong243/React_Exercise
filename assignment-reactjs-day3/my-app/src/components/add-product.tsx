import React from 'react';
import { useForm } from 'react-hook-form';
import "./addproduct.css"


interface IAddForm{
  nameProduct:string;
  unitPrice:number;
  quantity:number;
}
const Addproduct = () => {
  const{register,handleSubmit,formState:{errors}}=useForm<IAddForm>();
 
  const onSubmit=(data:IAddForm)=>{
      alert(JSON.stringify(data))
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='addproductform'>
      <h1>Add product</h1>
      <div>
        <label >Name product</label>
        <input {...register("nameProduct",{required:true})} placeholder="Input name product"/>
        {errors.nameProduct && <p>Name product is null</p>}
      </div>
      <div>
        <label >Unit price</label>
        <input {...register("unitPrice",{required:true})}type="number" />
        {errors.unitPrice && <p>Unit price is null</p>}
      </div>
      <div>
        <label >Quantity</label>
        <input {...register("quantity",{required:true, max:50})} type="number" />
        {errors?.quantity?.type === "required" && <p>This field is required</p>}
        {errors?.quantity?.type === "max" && <p>Quantity must smaller than 50</p>}
      </div>
      <input type="submit" value="Add"/>
    </form>
  )
}

export default Addproduct