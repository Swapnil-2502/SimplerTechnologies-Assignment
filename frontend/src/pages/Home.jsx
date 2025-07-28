
import Navbar from '../components/Navbar'
import UserCard from '../components/UserCard'

const Home = () => {
  return (
    <div>
        <Navbar />
        <h1>This is from Home Page</h1>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <UserCard name="Swapnil Hajare" email="swaphajare25@gmail.com" />
            <UserCard name="Ben Duckett" email="benduckett@gmail.com" />
            <UserCard name="John Snow" email="johnsnow@gmail.com" />
          </div>
        </div>
        
    </div>
       
  )
}

export default Home