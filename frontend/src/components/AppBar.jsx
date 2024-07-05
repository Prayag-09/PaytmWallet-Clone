export const Appbar = () => {
    return (
        <div className="shadow h-14 flex justify-between bg-white text-black">
            <div className="flex items-center ml-4">
                <span className="font-bold text-lg">PayTM App</span>
            </div>
            <div className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 bg-gray-300 rounded-full mr-4">
                    <span className="font-semibold text-lg">U</span>
                </div>
                <div className="flex items-center mr-4">
                    <span className="text-sm">Hello</span>
                </div>
            </div>
        </div>
    );
};
