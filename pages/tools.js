
import Layout from '../components/Layout';

import utilStyles from '../styles/utils.module.css';

const ToolsPage = () => {
  const title = 'Tools';
  return (
    <Layout title={title} description={title}>
      <main>
        <h1 className={utilStyles.comingSoon}>Coming soon 👀</h1>
      </main>
    </Layout>
  );
};

export default ToolsPage;
