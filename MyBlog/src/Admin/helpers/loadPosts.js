import { collection, getDocs, query, where, } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";



export const loadNotes = async(categories)=>{
  const collectionRef = collection(FirebaseDB, 'posts');
  const docs = await getDocs(collectionRef);
  const posts = [];

  docs.forEach(doc =>{
    for (const cat of categories) {
      if(cat.id.trim() == doc.data().category.trim()){
        posts.push({...doc.data(),'category_title':cat.title, 'id':doc.id })
        console.log('coincidesncias!!');
        console.log(`categoria id=${cat.id} y doc.category = ${doc.data().category}`);
        break;
      }else{
        posts.push({...doc.data(), 'id':doc.id });      
        console.log('no coincidesncias');
        console.log(`categoria id=${cat.id} y doc.category = ${doc.data().category}`);
        break;
      }
    }              
  });
  
  return posts;
}

export const loadCategories = async()=>{
  const collectionRef = collection(FirebaseDB, 'categories');
  const docs = await getDocs(collectionRef);
  const categories = [];

  docs.forEach(doc =>{
    console.log(doc.id);
    categories.push( { ...doc.data() , 'id':doc.id } );    
  })
  
  return categories;
}

export const loadPostsByCategory = async (categoryId) => {
  const posts = [];

  // Construir la consulta para obtener los posts de la categoría específica
  const postsQuery = query(collection(FirebaseDB, 'posts'), where('category', '==', categoryId));
  
  // Ejecutar la consulta
  const querySnapshot = await getDocs(postsQuery);

  // Iterar sobre los resultados de la consulta
  querySnapshot.forEach((doc) => {
    posts.push({ id: doc.id, ...doc.data() });
  });

  return posts;
};