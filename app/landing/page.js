
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';

async function getArticle(id){
    
  let data = axios.get(`https://g5mepch7r6.execute-api.us-east-1.amazonaws.com/dev/article/${id}`)
  .then(res => {return res.data})

  return data
}

export default async function Home() {

  let data = await getArticle("657630a2d68381e8ed305eb8")
  console.log(data)


  return (
    <>
      <h1>HELLo</h1>
      <p>{data.title}</p>
    </>
  )


}
