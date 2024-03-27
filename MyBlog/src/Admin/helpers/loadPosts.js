import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const loadNotes = async()=>{
  const collectionRef = collection(FirebaseDB, 'posts');
  const docs = await getDocs(collectionRef);
  const posts = [];

  docs.forEach(doc =>{
    console.log(doc.id);
    posts.push(doc.data({id:doc.id, ...doc.data() }));
  })
  console.log(posts);
  return posts;
}