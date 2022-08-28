import "./post.css"
import { Link } from "react-router-dom"

export default function Post({ post }) {
	const PF = "https://blog-reactapp.herokuapp.com/images/"
	return (
		<div className='post'>
			{post.photo && (
				<img className='postImg' src={PF + post.photo} alt="" />
			)}
			<div className="postInfo">
				<div className="postCats">
					{post.categories.map(c => (
						<span className="postCat">{c.name}</span>
					))}
				</div>
				<Link to={`/post/${post._id}`} className="link">
					<span className='postTitle'>{post.title}</span>
				</Link>
				<hr />
				<div className="postInfoDetails">
					<span className="singlePostAuthor">By:&ensp; 
						<Link to={`/?user=${post.username}`} className='link' style={{color: "teal"}}>
							<u><b>{post.username}</b></u>
						</Link>
					</span>
					<span className="postDate">{new Date(post.createdAt).toDateString()}</span>
				</div>
			</div>
			<p className="postDesc">{post.desc}</p>
		</div>
	)
}
