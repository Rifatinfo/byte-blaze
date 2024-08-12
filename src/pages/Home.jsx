import Hero from "../Components/Hero/Hero";


const Home = () => {
    return (
        <div className="flex flex-col item-center justify-center min-h-[calc(100vh-116px)] relative">
            <Hero></Hero>
            <img className="absolute bottom-0 w-full" src="src\assets\wave.svg" alt="" />
        </div>
    );
};

export default Home;