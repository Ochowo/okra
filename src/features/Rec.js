import { recommendations } from '../db/recommendations';
import Table from '../components/Table';
import { recHeader } from '../pageConfig/recHeaders';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidenav from '../components/Sidenav';

const Recommendations = () => (
  <div className="flex flex-col min-h-customHeight">
    <Navbar />

    {' '}
    <div className="flex flex-row">
      <Sidenav />
      <Table
        data={recommendations}
        columns={recHeader}
      />
    </div>

    <Footer />
  </div>
);
export default Recommendations;
