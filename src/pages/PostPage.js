import { useQuery } from 'graphql-hooks';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import ReactMarkdown from 'react-markdown';

const GET_POSTS_QUERY = `
query SinglePostQuery($slug: String) {
  post(filter: {slug: {eq: $slug}}) {
    title
    tags {
      color {
        hex
      }
      singletag
    }
    content
    createdAt
  }
  header {
    logo
    navlinks {
      slug
      title
    }
  }
}
`;

const PostPage = () => {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(GET_POSTS_QUERY, {
    variables: { slug },
  });

  if (loading) {
    return <h1 className=''>Loading..</h1>; // Spinner
  }

  console.log(data);

  const createdDate = new Date(data.post.createdAt);

  return (
    <Layout header={data.header}>
      <div className='py-20 sm:max-w-[600px] mx-auto'>
        <small className='text-[#8a8a8a]'>
          Posted:{' '}
          {createdDate.toLocaleDateString('default', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
          })}
        </small>
        <h1 className='text-6xl font-extrabold my-4'>{data.post.title}</h1>
        {data.post.tags.map((tag, index) => (
          <small
            key={index}
            style={{ backgroundColor: tag.color.hex }}
            className='rounded-lg py-1 px-4 mr-3'
          >
            {tag.singletag}
          </small>
        ))}
        {data.post.content.split('\n').map((ct, i) => (
          <ReactMarkdown key={i} className='my-4'>
            {ct}
          </ReactMarkdown>
        ))}
      </div>
    </Layout>
  );
};

export default PostPage;
