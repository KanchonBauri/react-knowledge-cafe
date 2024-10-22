import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between border-b-2 border-gray-500 p-5 ' >
            <h1 className='text-6xl' >Knowleged Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;