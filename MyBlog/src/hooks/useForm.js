import { useMemo, useState, useEffect } from "react"

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});
  
  useEffect( ()=>{
    createValidators();
  },[formState]);

  useEffect( ()=>{
    setFormState(initialForm);
  },[initialForm])

  const isFormValid = useMemo( ()=>{

    for (const formValues of  Object.keys( formValidation )){
      if ( formValidation[formValues] !== null) return false;
    }
    return true;
  }, [formState]);

  const createValidators = ()=>{
    const formCheckedValues = {};

    for( const formField of Object.keys( formValidations ) ){
      const [fn, errorMessage] = formValidations[formField];
      formCheckedValues[`${formField}Valid`] = fn(formState[formField] ) ? null : errorMessage
      
    }
    setFormValidation(formCheckedValues);
  }
  
  const onInputChange = ({target})=>{
   const {name, value} = target;
   setFormState({
    ...formState,
    [ name ]:value
   });
  }

  const onResetForm = ()=>{
    setFormState(initialForm);
  }
  const setFeatured = ({target})=>{
    
    const {name, checked} = target;
       console.log(`ipe! = ${JSON.parse(checked)}`);
   
      setFormState({
       ...formState,
       [ name ]:(!!checked)
      });
     
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    setFeatured,

    ...formValidation,
    isFormValid
  }
}
