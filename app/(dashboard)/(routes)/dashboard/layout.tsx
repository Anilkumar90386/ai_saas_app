const DashboardLayout =({
    children
};{
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:flex-col md:fixed md:insert-y-0 z-[80] bg-grey-900">
                <div>
                    Hello Sidebar
                </div>

            </div>
            <main className="md:pl-72">
                
            </main>
        </div>
    );
}
export default DashboardLayout;