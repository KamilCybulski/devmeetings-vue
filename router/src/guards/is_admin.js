import store from '../store/store';

export default (to, from, next) => store.state.user.isAdmin
  ? next()
  : next({ name: 'home' });
