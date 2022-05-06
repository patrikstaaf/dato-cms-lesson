const Card = ({ tags, title, content, slug }) => {
  const excerpt = (text) => {
    return text.substr(0, 150) + '...';
  };

  return (
    <div className='bg-[#fbfbfb] rounded-xl pb-12 pt-4 px-4 relative drop-shadow-lg my-8'>
      <div className='flex gap-2 mb-6'>
        {tags.map((tag, i) => (
          <small
            key={i}
            style={{ backgroundColor: tag.color.hex }}
            className='rounded-lg py-1 px-4'
          >
            {tag.singletag}
          </small>
        ))}
      </div>
      <h2 className='font-extrabold text-2xl mb-4'>{title}</h2>
      <p className='leading-6 '>{excerpt(content)}</p>
      <a href={`/post/${slug}`}>
        <div className='bg-[#ff7b7b] hover:bg-[#ff5a5a] p-4 inline-block rounded-br-xl absolute bottom-0 right-0'>
          {' '}
          <svg
            width='10'
            height='14'
            viewBox='0 0 10 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2.31668 0L0.68335 1.63333L6.05002 7L0.68335 12.3667L2.31668 14L9.31668 7L2.31668 0Z'
              fill='white'
            />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default Card;
