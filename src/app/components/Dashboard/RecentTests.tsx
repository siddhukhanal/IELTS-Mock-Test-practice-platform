import { read } from 'fs';
import React from 'react'
import { FiClock, FiDollarSign, FiMoreHorizontal } from 'react-icons/fi'

const RecentTests = () => {
  return (
    <div className="bg-white col-span-12 p-4 rounded-xl border-stone-300"
    >
        <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap1.5 font medium">
                <FiClock/> Recent Tests
            </h3>
            <button className="text-sm text-primary hover:underline">See all</button>
        
          
        </div>
        <table className="w-full table-auto "
        >
            <TableHead/>
            <tbody>
                <TableRow
                Date="Oct-20-2026"
                Reading={7.5}
                Writing={7.5}
                Speaking={8}
                Listening={5.5}
                Band={6.5}
                order={1}
                />
                <TableRow
                Date="Oct-20-2026"
                Reading={7.5}
                Writing={7.5}
                Speaking={8}
                Listening={5.5}
                Band={6.5}
                order={2}
                />
                <TableRow
                Date="Oct-20-2026"
                Reading={7.5}
                Writing={7.5}
                Speaking={8}
                Listening={5.5}
                Band={6.5}
                order={3}
                />
                <TableRow
                Date="Oct-20-2026"
                Reading={7.5}
                Writing={7.5}
                Speaking={8}
                Listening={5.5}
                Band={6.5}
                order={4}
                />
                <TableRow
                Date="Oct-20-2026"
                Reading={7.5}
                Writing={7.5}
                Speaking={8}
                Listening={5.5}
                Band={6.5}
                order={5}
                />
                

            </tbody>
        </table>
    </div>
  )
};
const TableHead=()=>{
    return <thead>
        <tr className="text-sm font-normal text-stone-500">
            <th className="text-start p-1.5">Date</th>
            <th className="text-start p-1.5">Reading</th>
            <th className="text-start p-1.5">Writing</th>
            <th className="text-start p-1.5">Speaking</th>
            <th className="text-start p-1.5">Listening</th>
            <th className="text-start p-1.5">Band</th>
            <th className="w-8"></th>
        </tr>

    </thead>
};
const TableRow=({
    Date,
    Reading,
    Writing,
    Speaking,
    Listening,
    Band,
    order,
}:{
    Date:string;
    Reading:number;
    Writing:number;
    Speaking:number;
    Listening:number;
    Band:number;
    order:number;

})=>{
    return <tr className={order%2 ? "bg-stone-100 text-sm":"text-sm"}>
        <td className="p-1.5"
        >
            <a href="#" className="text-primary underline flex items-center gap-1"
            >
                {Date}<FiClock/>
            </a>

        </td>
        <td className="p-1.5">{Reading}</td>
        <td className="p-1.5">{Writing}</td>
        <td className="p-1.5">{Speaking}</td>
        <td className="p-1.5">{Listening}</td>
        <td className="p-1.5">{Band}</td>
        <td className="w-8">
            <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8">
            <FiMoreHorizontal/>
        </button>
        </td>
        
    </tr>
}

export default RecentTests
