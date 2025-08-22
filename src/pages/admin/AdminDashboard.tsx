import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Users, 
  CreditCard, 
  DollarSign, 
  TrendingUp,
  Search,
  Filter,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Download
} from 'lucide-react';

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock data - in real app, this would come from API
  const stats = {
    totalLoans: 1247,
    activeLoans: 342,
    totalUsers: 2180,
    defaultRate: 3.2,
    totalRepayments: 4521000,
    averageLoanAmount: 12500
  };

  const recentLoans = [
    {
      id: 'L001',
      userName: 'John Doe',
      userEmail: 'john@example.com',
      amount: 15000,
      term: 30,
      status: 'pending',
      appliedDate: '2024-01-10',
      purpose: 'Emergency'
    },
    {
      id: 'L002',
      userName: 'Sarah Johnson',
      userEmail: 'sarah@example.com',
      amount: 8000,
      term: 21,
      status: 'active',
      appliedDate: '2024-01-09',
      purpose: 'Bills'
    },
    {
      id: 'L003',
      userName: 'Michael Brown',
      userEmail: 'michael@example.com',
      amount: 25000,
      term: 60,
      status: 'completed',
      appliedDate: '2024-01-08',
      purpose: 'Home Improvement'
    }
  ];

  const users = [
    {
      id: 'U001',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+27 12 345 6789',
      kycStatus: 'verified',
      activeLoans: 1,
      totalBorrowed: 15000,
      joinedDate: '2023-12-15'
    },
    {
      id: 'U002',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+27 11 987 6543',
      kycStatus: 'pending',
      activeLoans: 0,
      totalBorrowed: 8000,
      joinedDate: '2024-01-05'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-info text-info-foreground">Active</Badge>;
      case 'completed':
        return <Badge className="bg-success text-success-foreground">Completed</Badge>;
      case 'pending':
        return <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getKycBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <Badge className="bg-success text-success-foreground">Verified</Badge>;
      case 'pending':
        return <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const approveLoan = (loanId: string) => {
    // TODO: Implement loan approval API call
    console.log('Approving loan:', loanId);
  };

  const rejectLoan = (loanId: string) => {
    // TODO: Implement loan rejection API call
    console.log('Rejecting loan:', loanId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-primary">EzLend ZA Admin</h1>
              <p className="text-muted-foreground">Loan Management Dashboard</p>
            </div>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Loans</CardTitle>
              <CreditCard className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalLoans.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Loans</CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeLoans}</div>
              <p className="text-xs text-muted-foreground">
                Currently being repaid
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +23% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Default Rate</CardTitle>
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.defaultRate}%</div>
              <p className="text-xs text-success">
                -0.5% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Loan Management Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Loan Applications</CardTitle>
              <CardDescription>
                Review and manage pending loan applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentLoans.map((loan) => (
                  <div key={loan.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{loan.userName}</span>
                        {getStatusBadge(loan.status)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        R{loan.amount.toLocaleString()} • {loan.term} days • {loan.purpose}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Applied: {new Date(loan.appliedDate).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4" />
                      </Button>
                      {loan.status === 'pending' && (
                        <>
                          <Button 
                            size="sm" 
                            className="bg-success text-success-foreground hover:bg-success/90"
                            onClick={() => approveLoan(loan.id)}
                          >
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="destructive"
                            onClick={() => rejectLoan(loan.id)}
                          >
                            <XCircle className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
              <CardDescription>
                Total repayments and portfolio performance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">R{(stats.totalRepayments / 1000000).toFixed(1)}M</div>
                  <div className="text-sm text-muted-foreground">Total Repayments</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
                  <div className="text-2xl font-bold">R{stats.averageLoanAmount.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Avg Loan Amount</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Repayment Rate</span>
                  <span className="text-sm font-medium">96.8%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '96.8%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Management Table */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  View and manage registered users
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 w-64"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>KYC Status</TableHead>
                  <TableHead>Active Loans</TableHead>
                  <TableHead>Total Borrowed</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">ID: {user.id}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="text-sm">{user.email}</div>
                        <div className="text-sm text-muted-foreground">{user.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {getKycBadge(user.kycStatus)}
                    </TableCell>
                    <TableCell>{user.activeLoans}</TableCell>
                    <TableCell>R{user.totalBorrowed.toLocaleString()}</TableCell>
                    <TableCell>{new Date(user.joinedDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;