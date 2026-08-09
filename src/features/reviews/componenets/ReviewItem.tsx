// import { Ellipsis, Pencil, Trash2 } from "lucide-react";
// import { useState } from "react";

// function ReviewItem({ review, user }: Props) {

//   const isAuthor = review.author._id === user?._id;

//   return (
//     <div className="relative">
//       {/* Review content */}
//       <div className="flex items-start justify-between">
//         <div>
//           <p>{review.comment}</p>
//         </div>

//         {isAuthor && (
//           <div className="relative">
//             <Ellipsis
//               onClick={() => setIsMenuOpen((prev) => !prev)}
//               className="text-lg cursor-pointer font-semibold"
//             />

//             {isMenuOpen && (
//               <div className="absolute right-0 top-7 z-50 w-36 rounded-lg border bg-white p-1 shadow-lg">
//                 <button
//                   onClick={() => {
//                     setIsMenuOpen(false);
//                     // update review
//                   }}
//                   className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100"
//                 >
//                   <Pencil size={15} />
//                   Modifier
//                 </button>

//                 <button
//                   onClick={() => {
//                     setIsMenuOpen(false);
//                     // delete review
//                   }}
//                   className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50"
//                 >
//                   <Trash2 size={15} />
//                   Supprimer
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
