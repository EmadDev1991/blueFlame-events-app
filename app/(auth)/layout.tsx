interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full flex flex-col min-h-screen justify-center items-center bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      {children}
    </div>
  );
};

export default Layout;
