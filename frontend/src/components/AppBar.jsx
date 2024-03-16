/* eslint-disable react/prop-types */
    export default function Appbar ({label,profile,logo}) {
        return <div className="shadow h-14 flex justify-between">
            <div className="flex flex-col justify-center h-full ml-4">
                {label}
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center h-full mr-4">
                    {profile}
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {logo}
                    </div>
                </div>
            </div>
        </div>
    }