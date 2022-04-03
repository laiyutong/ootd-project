import './ExploreContainer1.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer1: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container1">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI111 </a></p>
    </div>

  );
};

export default ExploreContainer1;
