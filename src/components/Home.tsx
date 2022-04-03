import './Home.css';

interface ContainerProps {
  name: string;
}

const Home: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">

      <div className='type'>
          <div className='type-item'>女生衣著</div>
          <div className='type-item'>男生衣著</div>
      </div>
      <div className='part'>
          <div className='part-top'>
              <p className='part-top-name'>上半身</p>
              <div className='part-top-item'>T-Shirt</div>
              <div className='part-top-item'>背心</div>
              <div className='part-top-item'>襯衫</div>
              <div className='part-top-item'>帽Ｔ</div>
              <div className='part-top-item'>針織/毛衣</div>
              <div className='part-top-item'>外套</div>
              <div className='part-top-item'>套裝</div>
              <div className='part-top-item'>洋裝</div>
          </div>
          <div className='part-bottom'>
              <p className='part-top-name'>下半身</p>
              <div className='part-top-item'>短褲</div>
              <div className='part-top-item'>長褲</div>
              <div className='part-top-item'>短裙</div>
              <div className='part-top-item'>長裙</div>
          </div>
      </div>
    </div>
  );
};

export default Home;
