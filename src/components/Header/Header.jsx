
import profile from "../../assets/images/profile.png"

const Header = () => {
    return (
        <div className='flex justify-between p-4 bg-slate-400 border-b-2 '>
            <h2 className='text-4xl '>Knowledge Cafe</h2>
            <div>
                <img src={profile} alt="" className='w-12 h-auto'/>
            </div>
        </div>
    );
};

export default Header;