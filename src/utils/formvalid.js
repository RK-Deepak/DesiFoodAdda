export const formvalid=(email,password,cpassowrd)=>
{
   const isemailstructure=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);

   const ispasswordstructure=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

   const isconformpasswordstructure=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(cpassowrd);

   if(!isemailstructure)
   {
          return "Email is not valid...";
   }
    if(!ispasswordstructure)
   {
         
          return "Password is not valid..."
   }
    if(cpassowrd!== null)
   {
       if(!isconformpasswordstructure)
       {
          return "Confirm Password is not valid..."
       }
       if (password!==cpassowrd)
       {
              return "Password does not match..";
       }
    

         
   }
  
 return null;

}