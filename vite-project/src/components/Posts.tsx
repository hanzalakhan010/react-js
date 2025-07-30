import { useEffect, useState } from "react"
interface Post {
    id:number,
    title: string,
    body: string
}
const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
    }, [])
    return (
        <div>
            <div>
                {posts.map((post) => (
                    <div key={post.id} >
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Posts;