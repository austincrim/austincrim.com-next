import Nav from '../../components/Nav';

const Post = (props) => (
    <>
        <Nav />
        <div className='flex flex-col justify-around items-center text-gray-200'>
            <h3 className='text-3xl'>{props.post.title}</h3>
            <div className='font-serif' dangerouslySetInnerHTML={{ __html: props.post.content }} />
        </div>
    </>
);

export async function getStaticProps(context) {
    const { id } = context.query;
    const response = await fetch(
        `https://austin-crim-blog-api.herokuapp.com/posts/${id}`
    );
    const data = await response.json();

    return {
        post: data,
    };
}

export default Post;
