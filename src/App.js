import Header from './component/Header';
import Footer from './component/Footer';
import Banner from './component/Banner/Banner';
import Quote from './component/Quote';
import Card from './component/Card';
import FeatureLayout from './component/Feature/FeatureLayout';
import EmployeeLayout from './component/Employee/EmployeeLayout';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <Quote />
        <Card />
        <FeatureLayout />
        <EmployeeLayout />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
