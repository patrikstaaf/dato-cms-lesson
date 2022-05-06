const LargeButton = ({ color, title, link }) => {
  const darkenColor = (r, g, b, percent) => {
    return (
      '#' +
      (0 | ((1 << 8) + r * (1 - percent / 100))).toString(16).substr(1) +
      (0 | ((1 << 8) + g * (1 - percent / 100))).toString(16).substr(1) +
      (0 | ((1 << 8) + b * (1 - percent / 100))).toString(16).substr(1)
    );
  };
  return (
    <a href={`/${link}`}>
      <button
        className={'pl-7 pr-16 py-3 rounded-xl relative font-light'}
        style={{ backgroundColor: color.hex }}
      >
        {title}
        <span
          className='absolute right-0 top-0 h-full rounded-xl w-12 grid place-items-center'
          style={{
            backgroundColor: darkenColor(color.red, color.green, color.blue, 7),
          }}
        >
          <svg
            width='10'
            height='14'
            viewBox='0 0 10 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2.31668 0L0.68335 1.63333L6.05002 7L0.68335 12.3667L2.31668 14L9.31668 7L2.31668 0Z'
              fill='#1D1D1D'
            />
          </svg>
        </span>
      </button>
    </a>
  );
};

export default LargeButton;
