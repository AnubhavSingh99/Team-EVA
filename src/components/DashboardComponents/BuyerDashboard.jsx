import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { User, ShoppingCart, Truck, DollarSign, MapPin, Calendar, Star, Package, TrendingUp, Clock, IndianRupee } from 'lucide-react';

const BuyerDashboard = () => {
    const [buyer, setBuyer] = useState({
        name: "Amit Sharma",
        company: "FoodTech Solutions Pvt. Ltd.",
        email: "amit.sharma@foodtech.com",
        location: "Mumbai, Maharashtra",
        memberSince: "2019",
        rating: 4.7,
        totalPurchases: "₹15,00,000",
        preferredCategories: ["Grains", "Fruits", "Vegetables"]
    });

    const [pastTransactions, setPastTransactions] = useState([
        { id: 1, date: "2024-08-15", farmer: "Rajesh Patel", crop: "Rice", quantity: "100 quintals", price: "₹2,100/quintal", total: "₹2,10,000", status: "Delivered" },
        { id: 2, date: "2024-08-10", farmer: "Sunita Devi", crop: "Wheat", quantity: "80 quintals", price: "₹2,250/quintal", total: "₹1,80,000", status: "In Transit" },
        { id: 3, date: "2024-08-05", farmer: "Mahesh Kumar", crop: "Cotton", quantity: "50 quintals", price: "₹6,000/quintal", total: "₹3,00,000", status: "Processing" },
    ]);

    const [activePurchases, setActivePurchases] = useState([
        { id: 1, farmer: "Anita Singh", crop: "Tomatoes", quantity: "20 quintals", price: "₹1,500/quintal", total: "₹30,000", status: "Packed", estimatedDelivery: "2024-09-05" },
        { id: 2, farmer: "Vikram Reddy", crop: "Onions", quantity: "30 quintals", price: "₹1,200/quintal", total: "₹36,000", status: "Shipped", estimatedDelivery: "2024-09-03" },
    ]);

    const monthlySpending = [
        { name: 'Mar', spending: 300000 },
        { name: 'Apr', spending: 250000 },
        { name: 'May', spending: 400000 },
        { name: 'Jun', spending: 350000 },
        { name: 'Jul', spending: 450000 },
        { name: 'Aug', spending: 500000 },
    ];

    const purchaseDistribution = [
        { name: 'Grains', value: 50 },
        { name: 'Fruits', value: 30 },
        { name: 'Vegetables', value: 20 },
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

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Buyer Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <InfoCard title="Total Purchases" value={buyer.totalPurchases} icon={ShoppingCart} subvalue="Lifetime value" />
                <InfoCard title="Active Orders" value={activePurchases.length} icon={Package} subvalue={`₹${activePurchases.reduce((acc, purchase) => acc + parseInt(purchase.total.replace('₹', '').replace(',', '')), 0).toLocaleString('en-IN')} total value`} />
                <InfoCard title="Buyer Rating" value={`${buyer.rating}/5.0`} icon={Star} subvalue="Based on farmer feedback" />
                <InfoCard title="Monthly Spending" value={`₹${monthlySpending[monthlySpending.length - 1].spending.toLocaleString('en-IN')}`} icon={IndianRupee} subvalue={`${((monthlySpending[monthlySpending.length - 1].spending / monthlySpending[monthlySpending.length - 2].spending - 1) * 100).toFixed(2)}% from last month`} />
            </div>

            <Tabs defaultValue="profile" className="space-y-6">
                <TabsList className="bg-[#e0efb1] shadow-sm rounded-lg p-1">
                    <TabsTrigger value="profile" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 rounded"><User className="w-4 h-4 mr-2" />Profile</TabsTrigger>
                    <TabsTrigger value="transactions" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 rounded"><ShoppingCart className="w-4 h-4 mr-2" />Transactions</TabsTrigger>
                    <TabsTrigger value="active-orders" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 rounded"><Truck className="w-4 h-4 mr-2" />Active Orders</TabsTrigger>
                    <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 rounded"><TrendingUp className="w-4 h-4 mr-2" />Analytics</TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                    <Card className="bg-[#e0efb1] shadow-sm">
                        <CardContent className="pt-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <Avatar className="h-20 w-20">
                                    <AvatarImage src="/api/placeholder/200/200" alt={buyer.name} />
                                    <AvatarFallback>{buyer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">{buyer.name}</h3>
                                    <p className="text-sm text-gray-500">{buyer.company}</p>
                                    <p className="text-sm text-gray-500">{buyer.email}</p>
                                    <div className="flex items-center mt-1">
                                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                        <span className="text-sm text-gray-600">{buyer.rating}/5.0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center">
                                    <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Location</p>
                                        <p className="text-gray-700">{buyer.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Member Since</p>
                                        <p className="text-gray-700">{buyer.memberSince}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <ShoppingCart className="w-4 h-4 text-gray-400 mr-2" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Total Purchases</p>
                                        <p className="text-gray-700">{buyer.totalPurchases}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Package className="w-4 h-4 text-gray-400 mr-2" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Preferred Categories</p>
                                        <p className="text-gray-700">{buyer.preferredCategories.join(', ')}</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="transactions">
                    <Card className="bg-[#e0efb1] shadow-sm">
                        <CardHeader>
                            <CardTitle>Past Transactions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr>
                                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Date</th>
                                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Farmer</th>
                                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Crop</th>
                                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Quantity</th>
                                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Price</th>
                                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Total</th>
                                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pastTransactions.map((transaction) => (
                                            <tr key={transaction.id}>
                                                <td className="py-2 px-4 border-b text-sm text-gray-700">{transaction.date}</td>
                                                <td className="py-2 px-4 border-b text-sm text-gray-700">{transaction.farmer}</td>
                                                <td className="py-2 px-4 border-b text-sm text-gray-700">{transaction.crop}</td>
                                                <td className="py-2 px-4 border-b text-sm text-gray-700">{transaction.quantity}</td>
                                                <td className="py-2 px-4 border-b text-sm text-gray-700">{transaction.price}</td>
                                                <td className="py-2 px-4 border-b text-sm text-gray-700">{transaction.total}</td>
                                                <td className="py-2 px-4 border-b text-sm text-gray-700">{transaction.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="active-orders">
                    <Card className="bg-[#e0efb1] shadow-sm">
                        <CardHeader>
                            <CardTitle>Active Orders</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr>
                                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Farmer</th>
                                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Crop</th>
                                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Quantity</th>
                                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Price</th>
                                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Total</th>
                                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Status</th>
                                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Estimated Delivery</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {activePurchases.map((purchase) => (
                                            <tr key={purchase.id}>
                                                <td className="py-2 px-4 border-b text-sm text-gray-700">{purchase.farmer}</td>
                                                <td className="py-2 px-4 border-b text-sm text-gray-700">{purchase.crop}</td>
                                                <td className="py-2 px-4 border-b text-sm text-gray-700">{purchase.quantity}</td>
                                                <td className="py-2 px-4 border-b text-sm text-gray-700">{purchase.price}</td>
                                                <td className="py-2 px-4 border-b text-sm text-gray-700">{purchase.total}</td>
                                                <td className="py-2 px-4 border-b text-sm text-gray-700">{purchase.status}</td>
                                                <td className="py-2 px-4 border-b text-sm text-gray-700">{purchase.estimatedDelivery}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="analytics">
                    <Card className="bg-[#e0efb1] shadow-sm">
                        <CardHeader>
                            <CardTitle>Monthly Spending</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <div className="w-full h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={monthlySpending}>
                                        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value / 1000}K`} />
                                        <Tooltip formatter={(value) => `₹${value.toLocaleString('en-IN')}`} />
                                        <Bar dataKey="spending" fill="#82ca9d" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#e0efb1] shadow-sm mt-6">
                        <CardHeader>
                            <CardTitle>Purchase Distribution</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <div className="w-full h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={purchaseDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                                            {purchaseDistribution.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Legend />
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default BuyerDashboard;
