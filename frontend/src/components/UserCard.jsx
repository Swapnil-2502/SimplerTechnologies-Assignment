
const UserCard = ({name,email}) => {
   return (
        <div className="bg-gray-800 rounded-2xl shadow-lg w-full max-w-sm transition transform hover:scale-105 hover:shadow-xl text-white">
            <div className="flex items-center gap-4">
                
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SimplerTechnologies ERP Solutions</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Our cloud-based ERP system empowers businesses with real-time tracking, AI-driven analytics, and seamless automation to enhance operational efficiency and customer experience. </p>
            

                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-sm text-gray-300">{email}</p>
                </a>
            </div>
        </div>
   )
}
 
export default UserCard