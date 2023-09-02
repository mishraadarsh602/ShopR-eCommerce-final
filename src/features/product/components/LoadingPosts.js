// import { v4 as uuidv4 } from 'uuid';
// export const LoadingCard = () => {

//     return (
//         <div className="w-full rounded overflow-hidden shadow-lg m-2">
//             <div className="w-full h-64 bg-gray-300 animate-pulse"></div>
//             <div className="px-6 py-4 items-center">
//                 <div className="font-regular text-xl mb-2 w-20 h-4 bg-gray-300 animate-pulse"></div>
//             </div>
//         </div>
//     );
// }

// export const LoadingPosts = () => {
//    const htmlId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


//     const loadPages = [1, 2, 3, 4, 5, 6];
// let count = 0;
//     return (
//         <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-4 content-start">
//         {loadPages.map(num => {return <LoadingCard key={htmlId+(count++)} />})}
//         </div>
//     );
// }