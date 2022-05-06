import { useQuery } from 'graphql-hooks';
import Card from '../components/Card';
import LargeButton from '../components/LargeButton';
import Layout from '../components/Layout';

const GET_POSTS_QUERY = `
query FrontpageQuery {
  homepage {
    title
    introtext
    links {
      link {
        ... on PageRecord {
          slug
          _modelApiKey
        }
        ... on PostRecord {
          slug
          _modelApiKey
        }
      }
      title
      color {
          hex
          red
          green
          blue
      }
    }
  }
  allPosts {
    slug
    title
    tags {
      singletag
      color {
        hex
      }
    }
    content 
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

const HomePage = () => {
  const { data, loading, error } = useQuery(GET_POSTS_QUERY);

  if (loading) {
    return <h1 className=''>Loading..</h1>; // Spinner
  }

  console.log(data);

  return (
    <Layout header={data.header}>
      <div className='relative w-full sm:grid sm:grid-cols-2 sm:grid-rows-1'>
        <div className='sm:sticky sm:top-0 sm:right-10 order-2 flex justify-center'>
          <div className='max-w-[450px] mx-auto fixed'>
            <h1 className='font-extrabold text-3xl sm:text-6xl tracking-wide mt-10 mb-8'>
              {data.homepage.title}
            </h1>
            <p className='mb-8'>{data.homepage.introtext}</p>
            <div className='flex gap-4'>
              {data.homepage.links.map((link, i) => {
                if (link.link._modelApiKey === 'page') {
                  return (
                    <LargeButton
                      color={link.color}
                      title={link.title}
                      link={link.link.slug}
                      key={i}
                    />
                  );
                }

                if (link.link._modelApiKey === 'post') {
                  return (
                    <LargeButton
                      color={link.color}
                      title={link.title}
                      link={`post/${link.link.slug}`}
                      key={i}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className='lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-5 order-1 mt-[300px] sm:mt-0'>
          {data.allPosts.map((post, i) => (
            <Card
              title={post.title}
              tags={post.tags}
              slug={post.slug}
              content={post.content}
              key={i}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
