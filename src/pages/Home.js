import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";


const Home = () => {
    
    return (
        <div className="home">
            <Logo/>
            <Navigation />
            <h1>Bienvenue sur mon site fait avec React</h1>
            <Countries/>
            
        </div>
    )

}

export default Home;