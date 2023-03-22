import { deleteAsync as del } from 'del';

export default () => del('dist/');
