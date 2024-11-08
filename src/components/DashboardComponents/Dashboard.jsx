import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { User, Sprout, FileText, IndianRupee, MapPin, Calendar, Star, Truck, ShoppingCart, TrendingUp } from 'lucide-react';

const FarmerDashboard = () => {
    const [farmer, setFarmer] = useState({
        name: "Rajesh Patel",
        email: "rajesh.patel@example.com",
        location: "Gujarat, India",
        memberSince: "2020",
        rating: 4.8,
        totalAcres: 15,
        certifications: ["Organic", "Good Agricultural Practices (GAP)"]
    });

    const [listedCrops, setListedCrops] = useState([
        { id: 1, name: "Rice", quantity: "50 quintals", price: "₹2,000/quintal", status: "Active" },
        { id: 2, name: "Wheat", quantity: "30 quintals", price: "₹2,200/quintal", status: "Active" },
        { id: 3, name: "Cotton", quantity: "20 quintals", price: "₹6,000/quintal", status: "Sold", link: "https://example.com/cotton-contract" }
    ]);

    const [pendingContracts, setPendingContracts] = useState([
        { id: 1, buyer: "Reliance Fresh", crop: "Rice", quantity: "20 quintals", price: "₹2,100/quintal", status: "Pending", dueDate: "2024-09-15", link: "" },
        { id: 2, buyer: "ITC Limited", crop: "Wheat", quantity: "15 quintals", price: "₹2,250/quintal", status: "Pending", dueDate: "2024-10-01", link: "" },
        { id: 3, buyer: "Adani Enterprises", crop: "Cotton", quantity: "10 quintals", price: "₹6,200/quintal", status: "Completed", dueDate: "2024-08-20", link: "https://drive.google.com/file/d/1YsQtcHDUiqFdTu-oKRNyXaGjgYf-ftGD/view" }
    ]);

    const monthlyRevenue = [
        { name: 'Jan', revenue: 40000 },
        { name: 'Feb', revenue: 30000 },
        { name: 'Mar', revenue: 50000 },
        { name: 'Apr', revenue: 45000 },
        { name: 'May', revenue: 60000 },
        { name: 'Jun', revenue: 55000 }
    ];

    const cropDistribution = [
        { name: 'Rice', value: 50 },
        { name: 'Wheat', value: 30 },
        { name: 'Cotton', value: 20 }
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const InfoCard = ({ title, value, icon: Icon, subvalue }) => (
        <Card className="bg-[#e0efb1] shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
                <Icon className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-gray-700">{value}</div>
                {subvalue && <div className="text-xs text-gray-500 mt-1">{subvalue}</div>}
            </CardContent>
        </Card>
    );

    const handleContractClick = (link) => {
        if (link) {
            window.open(link, '_blank');
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Kisan Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <InfoCard title="Total Listed Crops" value={listedCrops.length} icon={Sprout} subvalue={`${listedCrops.reduce((acc, crop) => acc + parseInt(crop.quantity), 0)} quintals`} />
                <InfoCard title="Pending Contracts" value={pendingContracts.length} icon={FileText} subvalue={`₹${pendingContracts.reduce((acc, contract) => acc + parseFloat(contract.price.replace('₹', '').replace(',', '')) * parseInt(contract.quantity), 0).toFixed(2)} total value`} />
                <InfoCard title="Kisan Rating" value={`${farmer.rating}/5.0`} icon={Star} subvalue={`${farmer.certifications.join(', ')} Certified`} />
                <InfoCard title="Monthly Revenue" value={`₹${monthlyRevenue[monthlyRevenue.length - 1].revenue}`} icon={IndianRupee} subvalue={`${((monthlyRevenue[monthlyRevenue.length - 1].revenue / monthlyRevenue[monthlyRevenue.length - 2].revenue - 1) * 100).toFixed(2)}% from last month`} />
            </div>

            <Tabs defaultValue="profile" className="space-y-6">
                <TabsList className="bg-[#e0efb1] shadow-sm rounded-lg p-1">
                    <TabsTrigger value="profile" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 rounded">
                        <User className="w-4 h-4 mr-2" />Profile
                    </TabsTrigger>
                    <TabsTrigger value="crops" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 rounded">
                        <Sprout className="w-4 h-4 mr-2" />Crops
                    </TabsTrigger>
                    <TabsTrigger value="contracts" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 rounded">
                        <FileText className="w-4 h-4 mr-2" />Contracts
                    </TabsTrigger>
                    <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 rounded">
                        <TrendingUp className="w-4 h-4 mr-2" />Analytics
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                    <Card className="bg-[#e0efb1] shadow-sm">
                        <CardContent className="pt-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <Avatar className="h-20 w-20">
                                    <AvatarImage src="/api/placeholder/200/200" alt={farmer.name} />
                                    <AvatarFallback>{farmer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">{farmer.name}</h3>
                                    <p className="text-sm text-gray-500">{farmer.email}</p>
                                    <div className="flex items-center mt-1">
                                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                        <span className="text-sm text-gray-600">{farmer.rating}/5.0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center">
                                    <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Location</p>
                                        <p className="text-gray-700">{farmer.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Member Since</p>
                                        <p className="text-gray-700">{farmer.memberSince}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Truck className="w-4 h-4 text-gray-400 mr-2" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Total Land</p>
                                        <p className="text-gray-700">{farmer.totalAcres} acres</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <ShoppingCart className="w-4 h-4 text-gray-400 mr-2" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Certifications</p>
                                        <p className="text-gray-700">{farmer.certifications.join(', ')}</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="crops">
                    <Card className="bg-[#e0efb1] shadow-sm">
                        <CardContent className="pt-6">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left text-gray-500 border-b">
                                        <th className="pb-2">Crop</th>
                                        <th className="pb-2">Quantity</th>
                                        <th className="pb-2">Price</th>
                                        <th className="pb-2">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listedCrops.map(crop => (
                                        <tr key={crop.id} className="border-b last:border-b-0">
                                            <td className="py-3 text-gray-800 flex items-center">
                                                <Sprout className="w-4 h-4 text-green-500 mr-2" />
                                                {crop.name}
                                            </td>
                                            <td className="py-3 text-gray-600">{crop.quantity}</td>
                                            <td className="py-3 text-gray-600">{crop.price}</td>
                                            <td className="py-3 text-gray-600">
                                                <span className={`px-2 py-1 rounded-full text-xs ${crop.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                                    {crop.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="contracts">
                    <Card className="bg-[#e0efb1] shadow-sm">
                        <CardContent className="pt-6">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left text-gray-500 border-b">
                                        <th className="pb-2">Buyer</th>
                                        <th className="pb-2">Crop</th>
                                        <th className="pb-2">Quantity</th>
                                        <th className="pb-2">Price</th>
                                        <th className="pb-2">Due Date</th>
                                        <th className="pb-2">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pendingContracts.map(contract => (
                                        <tr
                                            key={contract.id}
                                            className="border-b last:border-b-0 cursor-pointer hover:bg-gray-100"
                                            onClick={() => handleContractClick(contract.link)}
                                        >
                                            <td className="py-3 text-gray-800">{contract.buyer}</td>
                                            <td className="py-3 text-gray-600">{contract.crop}</td>
                                            <td className="py-3 text-gray-600">{contract.quantity}</td>
                                            <td className="py-3 text-gray-600">{contract.price}</td>
                                            <td className="py-3 text-gray-600">{contract.dueDate}</td>
                                            <td className="py-3 text-gray-600">
                                                <span className={`px-2 py-1 rounded-full text-xs ${contract.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                                                    {contract.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="analytics">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="bg-[#e0efb1] shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold">Monthly Revenue</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={monthlyRevenue}>
                                        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value}`} />
                                        <Tooltip />
                                        <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        <Card className="bg-[#e0efb1] shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold">Crop Distribution</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            data={cropDistribution}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {cropDistribution.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default FarmerDashboard;
