import api from 'api';

export default function* loadUsers() {
  const res = yield api.get('/', {results: 20});
  console.log('@res', res);
  return res;
}
