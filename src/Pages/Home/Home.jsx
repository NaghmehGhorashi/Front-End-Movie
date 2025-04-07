
import Slider from "../../Components/CoreComponents/Slick/Slick";
import Wrapper from "../../Components/ShareComponents/Wrapper/Wrapper";

function Home() {


  return (
    <main>
      <Wrapper>
        <section aria-label="Movie Slider" className="mt-5">
          <Slider />
        </section>
        
      </Wrapper>
    
    </main>
  );
}

export default Home;

