const c = (...className) => {
  return className.filter(Boolean).join(' ');
};

export default c;
