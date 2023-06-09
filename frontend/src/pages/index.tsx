import Head from 'next/head';
import { createServer } from 'miragejs';
import CustomersPage from '@/shared/CustomersPage/CustomersPage';
import customers from '../shared/services/server/db.json';

createServer({
  routes() {
    this.get('/api/customers', () => customers);
    this.post('/api/customers', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return data;
    });
  },
});

const Home = () => (
  <>
    <Head>
      <title>Customers</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div>
      <CustomersPage />
    </div>
  </>
);

export default Home;
