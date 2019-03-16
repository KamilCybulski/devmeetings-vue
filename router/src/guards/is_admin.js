export default (to, from, next) => {
  const isAdmin = !!localStorage.getItem('admin');
  return isAdmin
    ? next()
    : next({ name: 'home' });
};
