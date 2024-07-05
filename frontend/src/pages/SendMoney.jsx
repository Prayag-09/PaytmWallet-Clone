import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';

const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const [transferStatus, setTransferStatus] = useState("");
    const [error, setError] = useState("");

    const handleTransfer = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3000/api/v1/account/transfer",
                {
                    to: id,
                    amount
                },
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                }
            );
            
            if (response.status === 200) {
                setTransferStatus("Transfer successful");
                setError("");
            } else {
                throw new Error("Failed to initiate transfer. Please try again.");
            }
        } catch (error) {
            setTransferStatus("");
            setError(error.message || "Failed to initiate transfer. Please try again.");
        }
    };

    return (
        <div className="flex justify-center h-screen bg-gray-100">
            <div className="h-full flex flex-col justify-center">
                <div className="border text-card-foreground max-w-md p-4 bg-white shadow-lg rounded-lg">
                    <div className="flex flex-col space-y-4 p-6">
                        <h2 className="text-2xl font-bold text-center">Send Money</h2>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-2xl">{name[0].toUpperCase()}</div>
                            <h3 className="text-xl font-semibold">{name}</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="amount" className="block text-sm font-medium leading-none">Amount (in Rs)</label>
                                <input
                                    id="amount"
                                    type="number"
                                    className="h-10 w-full px-3 py-2 text-sm border rounded-md bg-gray-200"
                                    placeholder="Enter amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                            <button
                                onClick={handleTransfer}
                                className="w-full h-10 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md transition-colors hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                            >
                                Initiate Transfer
                            </button>
                            {transferStatus && <p className="text-green-500 text-sm mt-2">{transferStatus}</p>}
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendMoney;